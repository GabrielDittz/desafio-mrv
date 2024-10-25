import LeadManagement from './components/LeadManagement'
import { Toaster } from "./components/ui/toaster"

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <LeadManagement />
      <Toaster />
    </div>
  )
}

export default App