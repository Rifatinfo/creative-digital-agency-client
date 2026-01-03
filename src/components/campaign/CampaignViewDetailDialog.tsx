import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Mail, Shield, Calendar, Video } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Campaign } from "@/types/campaign.interface";

interface ICampaignViewDialogProps {
  open: boolean;
  onClose: () => void;
  campaign: Campaign | null;
}

const CampaignViewDetailDialog = ({
  open,
  onClose,
  campaign,
}: ICampaignViewDialogProps) => {
  if (!campaign) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="min-w-5xl max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>Campaign Details</DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {/* Campaign Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg mb-6">
            <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
              <AvatarImage src={campaign.thumbnail || ""} alt={campaign.title} />
              <AvatarFallback className="text-2xl">
                {campaign.title[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-3xl font-bold mb-1">{campaign.title}</h2>
              <p className="text-muted-foreground mb-2 flex items-center justify-center sm:justify-start gap-2">
                <Mail className="h-4 w-4" />
                {campaign.brand}
              </p>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <Badge variant="secondary" className="text-sm">
                  <Shield className="h-3 w-3 mr-1" />
                  {campaign.category}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  {campaign.subcategory}
                </Badge>
              </div>
            </div>
          </div>

          {/* Campaign Information Grid */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-4">Campaign Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <Video className="h-4 w-4 mt-1 text-muted-foreground" />
                  <span>Video URL: <a href={campaign.videoUrl} target="_blank" className="underline text-blue-600">{campaign.videoUrl}</a></span>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-4 w-4 mt-1 text-muted-foreground" />
                  <span>Date: {campaign.dateLabel}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-4 w-4 mt-1 text-muted-foreground" />
                  <span>Views: {campaign.views}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Video className="h-4 w-4 mt-1 text-muted-foreground" />
                  <span>Duration: {campaign.duration}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant={campaign.featured ? "destructive" : "default"} className="text-sm">
                    {campaign.featured ? "Featured" : "Regular"}
                  </Badge>
                </div>
              </div>
            </div>

            <Separator />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CampaignViewDetailDialog;
