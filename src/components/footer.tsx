export type FooterProps = unknown;

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">&copy; 2023 Store, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
