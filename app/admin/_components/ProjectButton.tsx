import Button from "@/components/ui/Button";

export default function ProjectButton() {
  return (
    <Button
      href={"/admin/projects/new"}
      className="text-center bg-dark text-white hover:bg-light hover:text-dark hover:border-dark"
    >
      New Project
    </Button>
  );
}
