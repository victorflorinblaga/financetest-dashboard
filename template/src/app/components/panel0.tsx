import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ServiceRatingsPage = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 p-4">
      <Card className="bg-blue-600 text-white p-5">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Current Service Ratings</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="mt-4 text-white">This quarter's data was analyzed and here are our findings</CardDescription>
        </CardContent>
      </Card>
      <Separator className="bg-white h-px" />
      <div className="flex flex-row gap-4 flex-1">
        <div className="bg-blue-600 flex-1 p-4 text-white">
          statistic 1 missing
        </div>
        <div className="bg-blue-600 flex-1 p-4 text-white">
          statistic 2 missing
        </div>
        <div className="bg-blue-600 flex-1 p-4"></div>
      </div>
    </div>
  );
};

export default ServiceRatingsPage;