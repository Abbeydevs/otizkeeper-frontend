import { CONTACT_INFO } from "@/config/contact";
import { ContactForm } from "@/components/contact/contact-form";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-1px w-12 bg-otiz-purple" />
                  <span className="text-xs font-bold tracking-[0.4em] uppercase text-otiz-purple">
                    Get in Touch
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-otiz-black tracking-tighter leading-[0.9] mb-8">
                  Architect Your <br />
                  <span className="text-otiz-purple italic font-medium">
                    Performance.
                  </span>
                </h1>
                <p className="text-xl text-otiz-slate max-w-lg leading-relaxed">
                  {CONTACT_INFO.description}
                </p>
              </div>

              <div className="space-y-8">
                {CONTACT_INFO.details.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-otiz-gray flex items-center justify-center text-otiz-purple group-hover:bg-otiz-purple group-hover:text-white transition-all">
                      <detail.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-otiz-slate mb-1">
                        {detail.label}
                      </p>
                      <p className="text-lg font-bold text-otiz-black">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-otiz-purple/5 blur-[120px] rounded-full -z-10" />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-otiz-black text-white text-center">
        <div className="container mx-auto px-6">
          <p className="text-sm font-bold tracking-[0.5em] uppercase text-otiz-purple mb-4">
            Global Reach
          </p>
          <h2 className="text-3xl font-bold tracking-tight">
            Based in Uyo. Partnering Worldwide.
          </h2>
        </div>
      </section>
    </div>
  );
}
