import { Textarea } from "@/components/ui/textarea";

const NotesPage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Textarea placeholder="Write your notes here..." className="w-1/2 h-1/2" />
    </div>
  );
};

export default NotesPage;