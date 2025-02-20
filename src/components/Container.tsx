interface ContainerProp {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProp) {
  return (
    <main className="px-2">
      <div className="container mx-auto">{children}</div>
    </main>
  );
}
