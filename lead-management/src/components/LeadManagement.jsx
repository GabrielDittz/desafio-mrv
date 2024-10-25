import { useState } from 'react';
import * as PropTypes from 'prop-types';
import { Card, CardHeader, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Phone, Mail, User, Calendar, MapPin, Tag, DollarSign, Check, X } from 'lucide-react';
import { LeadsService } from '../services/api';
import { toast } from './ui/use-toast';
import { useEffect } from 'react'

const LeadCard = ({ lead, isAccepted, onAccept, onDecline }) => {
    return (
      <Card className="mb-4">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span className="font-semibold">
                {isAccepted ? lead.fullName : lead.firstName}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm text-gray-600">{lead.dateCreated}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{lead.suburb}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Tag className="w-4 h-4" />
              <span className="text-sm">{lead.category}</span>
            </div>
            {isAccepted && (
              <>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{lead.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{lead.email}</span>
                </div>
              </>
            )}
          </div>
          <p className="text-sm text-gray-600">{lead.description}</p>
          <div className="flex items-center space-x-2">
            <DollarSign className="w-4 h-4" />
            <span className="font-semibold">${lead.price}</span>
          </div>
        </CardContent>
        {!isAccepted && (
          <CardFooter className="flex justify-end space-x-2">
            <Button 
              variant="outline" 
              onClick={() => onDecline(lead.id)}
              className="border-red-500 text-red-500 hover:bg-red-50"
            >
              <X className="w-4 h-4 mr-2" />
              Decline
            </Button>
            <Button 
              onClick={() => onAccept(lead.id)}
              className="bg-green-500 text-white hover:bg-green-600"
            >
              <Check className="w-4 h-4 mr-2" />
              Accept
            </Button>
          </CardFooter>
        )}
      </Card>
    );
  };
  
  LeadCard.propTypes = {
    lead: PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      fullName: PropTypes.string,
      dateCreated: PropTypes.string.isRequired,
      suburb: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      phone: PropTypes.string,
      email: PropTypes.string,
    }).isRequired,
    isAccepted: PropTypes.bool.isRequired,
    onAccept: PropTypes.func,
    onDecline: PropTypes.func,
  };
  

const LeadManagement = () => {
    const [leads, setLeads] = useState({
      new: [],
      accepted: []
    });
    const [loading, setLoading] = useState(true);
  
    const fetchLeads = async () => {
      try {
        setLoading(true);
        const [invitedLeads, acceptedLeads] = await Promise.all([
          LeadsService.getInvitedLeads(),
          LeadsService.getAcceptedLeads()
        ]);
        
        setLeads({
          new: invitedLeads,
          accepted: acceptedLeads
        });
      } catch (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchLeads();
    }, []);
  
    const handleAccept = async (leadId) => {
      try {
        await LeadsService.acceptLead(leadId);
        await fetchLeads();
        toast({
          title: "Success",
          description: "Lead accepted successfully",
        });
      } catch (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive"
        });
      }
    };
  
    const handleDecline = async (leadId) => {
      try {
        await LeadsService.declineLead(leadId);
        await fetchLeads();
        toast({
          title: "Success",
          description: "Lead declined successfully",
        });
      } catch (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive"
        });
      }
    };
  
    if (loading) {
      return (
        <div className="container mx-auto p-4 max-w-4xl flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      );
    }
  
    return (
      <div className="container mx-auto p-4 max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">Lead Management</h1>
        <Tabs defaultValue="invited" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="invited">
              Invited
              {leads.new.length > 0 && (
                <span className="ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                  {leads.new.length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="accepted">
              Accepted
              {leads.accepted.length > 0 && (
                <span className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                  {leads.accepted.length}
                </span>
              )}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="invited">
            <div className="space-y-4">
              {leads.new.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No invited leads available
                </div>
              ) : (
                leads.new.map((lead) => (
                  <LeadCard 
                    key={lead.id} 
                    lead={lead} 
                    isAccepted={false}
                    onAccept={handleAccept}
                    onDecline={handleDecline}
                  />
                ))
              )}
            </div>
          </TabsContent>
          <TabsContent value="accepted">
            <div className="space-y-4">
              {leads.accepted.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No accepted leads available
                </div>
              ) : (
                leads.accepted.map((lead) => (
                  <LeadCard 
                    key={lead.id} 
                    lead={lead} 
                    isAccepted={true}
                  />
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    );
  };
  
  export default LeadManagement;