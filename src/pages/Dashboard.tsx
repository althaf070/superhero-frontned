import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { SERVER_URL } from "@/lib/serverurl";
import axios from "axios";
import { useEffect, useState } from "react";

// Define the Grievance type
interface Grievance {
  _id: string;
  createdAt: string;
  dateSubmitted: string;
  description: string;
  grievanceType: string;
  location: string;
  status: 'Pending' | 'In Progress' | 'Resolved' | 'Canceled';
  updatedAt: string;
  userId: string;
  __v: number;
}

const Dashboard = () => {
  const [grievance, setGrievance] = useState<Grievance[]>([]);

  // Fetch grievances from the server
  const fetchGrievance = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/get`);
      if (response.data.success) {
        setGrievance(response.data.grievence);
      }
    } catch (error) {
      console.error("Error fetching grievances", error);
    }
  };

  useEffect(() => {
    fetchGrievance();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-[80vh] px-4">
      {grievance?.length > 0 ? (
        <div className="w-full max-w-4xl bg-slate-700 rounded-lg shadow-lg p-10">
          <Table className="w-full text-white">
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Grievance Type</TableHead>
                <TableHead className="text-center">Complaint Date</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {grievance.map((log) => (
                <TableRow key={log._id} className="border border-gray-500">
                  <TableCell className="font-medium text-center">{log.grievanceType}</TableCell>
                  <TableCell className="text-center">{new Date(log.dateSubmitted).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">{log.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <p className="text-white text-lg">No grievance has been added.</p>
      )}
    </div>
  );
};

export default Dashboard;
