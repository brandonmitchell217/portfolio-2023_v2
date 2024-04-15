import Button from "@/components/ui/Button";

export default function ProjectButton() {
  return (
    <Button
      href={"/admin/projects/new"}
      className="text-center text-dark border-dark"
    >
      New Project
    </Button>
  );
}
