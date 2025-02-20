interface ContainerProp {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProp) {
  return (
    <main className="py-10 px-2 min-h-screen bg-neutral-100 dark:bg-secondaryDark transition-colors duration-300">
      <div className="container mx-auto">{children}</div>
    </main>
  );
}
