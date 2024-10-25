import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://localhost:44388/api',
  headers: {
    'Content-Type': 'application/json',
  }
});

export const LeadsService = {
  getInvitedLeads: async () => {
    try {
      const response = await api.get('/Leads/invited');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch invited leads');
    }
  },

  getAcceptedLeads: async () => {
    try {
      const response = await api.get('/Leads/accepted');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch accepted leads');
    }
  },

  acceptLead: async (id) => {
    try {
      const response = await api.post(`/Leads/${id}/accept`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to accept lead');
    }
  },

  declineLead: async (id) => {
    try {
      const response = await api.post(`/Leads/${id}/decline`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to decline lead');
    }
  }
};