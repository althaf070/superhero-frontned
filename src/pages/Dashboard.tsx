import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { SERVER_URL } from "@/lib/serverurl";
import axios from "axios";
import { useEffect, useState } from "react";

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
  // changin color based on status
  const getStatusColor = (status: Grievance["status"]) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500 text-white";
      case "In Progress":
        return "bg-blue-500 text-white";
      case "Resolved":
        return "bg-green-500 text-white";
      case "Canceled":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };
  useEffect(() => {
    fetchGrievance();
  }, []);

  return (
    <div className="flex flex-col mt-6 md:mt-10 items-center w-full min-h-[80vh] px-4">
      {grievance?.length > 0 ? (
        <div className="w-full max-w-4xl bg-slate-700 rounded-lg shadow-lg p-10">
          <Table className="w-full text-white">
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Grievance Type</TableHead>
                <TableHead className="text-center">Complaint Date</TableHead>
                <TableHead >Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {grievance.map((log) => (
                <TableRow key={log._id} className="border border-gray-500">
                  <TableCell className="font-medium text-center">{log.grievanceType}</TableCell>
                  <TableCell className="text-center">{new Date(log.dateSubmitted).toLocaleDateString()}</TableCell>
                  <TableCell >{<Badge className={`${getStatusColor(log.status)} rounded-lg text-center`}>{log.status}</Badge>}</TableCell>
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
