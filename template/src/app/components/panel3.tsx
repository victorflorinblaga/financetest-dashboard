import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const ResponsiveGrid = () => {
  return (
    <div className="w-full h-full p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      <Card className="bg-blue-500 flex flex-col h-full rounded-lg">
        <CardHeader>
          <CardTitle className="text-white text-3xl font-bold">Average User Experience</CardTitle>
          <CardDescription className="text-white text-2xl">4.5/5 Stars</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow" />
      </Card>

      <Card className="bg-blue-500 flex flex-col h-full rounded-lg">
        <CardHeader>
          <CardTitle className="text-white text-3xl font-bold">Average Waiting Time</CardTitle>
          <CardDescription className="text-white text-2xl">2.3 Minutes</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow" />
      </Card>

      <Card className="bg-blue-500 flex flex-col h-full rounded-lg">
        <CardHeader>
          <CardTitle className="text-white text-3xl font-bold">User Satisfaction of Customer Service</CardTitle>
          <CardDescription className="text-white text-2xl">3.5/5 Stars</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow" />
      </Card>

      <Card className="bg-blue-500 col-span-1 sm:col-span-2 md:col-span-3 flex flex-col h-full rounded-lg">
        <CardHeader>
          <CardTitle className="text-white text-3xl font-bold">2025 UX Goals</CardTitle>
          <CardDescription className="text-white text-xl">
            1. 4.7 star average user experience.<br />
            2. Average waiting time reduced to 1.9 minutes.<br />
            3. Customer service satisfaction raised to 4/5 stars.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow" />
      </Card>
    </div>
  );
};

export default ResponsiveGrid;