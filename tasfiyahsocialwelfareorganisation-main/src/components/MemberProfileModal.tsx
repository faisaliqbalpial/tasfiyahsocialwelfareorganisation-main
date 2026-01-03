import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, Quote } from "lucide-react";
import { CommitteeMember } from "@/data/committeeData";

interface MemberProfileModalProps {
  member: CommitteeMember | null;
  isOpen: boolean;
  onClose: () => void;
}

const MemberProfileModal = ({ member, isOpen, onClose }: MemberProfileModalProps) => {
  if (!member) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg p-0 overflow-hidden">
        <DialogHeader className="sr-only">
          <DialogTitle>{member.name}</DialogTitle>
        </DialogHeader>
        
        {/* Header with gradient */}
        <div className="relative h-32 bg-hero-gradient">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/20 flex items-center justify-center hover:bg-background/40 transition-colors"
          >
            <X className="w-4 h-4 text-primary-foreground" />
          </button>
        </div>

        {/* Profile Image */}
        <div className="relative -mt-16 px-6">
          <div className="w-32 h-32 rounded-full border-4 border-background overflow-hidden shadow-lg mx-auto">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 text-center">
          <h3 className="text-2xl font-bold text-foreground mt-4">{member.name}</h3>
          <p className="text-primary font-medium mt-1">{member.position}</p>
          <p className="text-sm text-muted-foreground mt-1">{member.period}</p>

          {member.message && (
            <div className="mt-6 bg-muted/50 rounded-xl p-4 relative">
              <Quote className="w-6 h-6 text-primary/30 absolute top-3 left-3" />
              <p className="text-muted-foreground text-sm leading-relaxed pt-4 px-4">
                {member.message}
              </p>
            </div>
          )}

          {(member.phone || member.email) && (
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              {member.phone && <p>📞 {member.phone}</p>}
              {member.email && <p>✉️ {member.email}</p>}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MemberProfileModal;
