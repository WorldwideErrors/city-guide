type headerProps = {
    title: string;
    subtitle: string;
    buttons?: React.ReactNode;
};

export default function HeaderSection({ title, subtitle, buttons }: headerProps) {
    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-brown">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wider">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                {subtitle}
              </p>
            </div>
            {buttons && <div className="pt-8">{buttons}</div>}
          </div>
        </section>
    );
}