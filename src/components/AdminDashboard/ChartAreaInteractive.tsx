"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

interface ChartProps {
  chartData: { date: string; enrollments: number }[];
  total: number;
}

export function ChartAreaInteractive({ chartData, total }: ChartProps) {
  const chartConfig = {
    enrollments: {
      label: "Booking",
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig;

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Total </CardTitle>
        <CardDescription>
          Last 30 days : {total}
        </CardDescription>
      </CardHeader>

      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })
              }
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  labelFormatter={(value) =>
                    new Date(value).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })
                  }
                />
              }
            />

            <Bar
              dataKey="enrollments"
              barSize={40}        
              radius={[6, 6, 0, 0]}
              fill="#c73450"
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
