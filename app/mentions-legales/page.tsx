"use client";
import { useRouter } from "next/navigation";
import Cursor from "../../components/Cursor";

export default function MentionsLegales() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 2800);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-300 px-6 md:px-16 py-24">
      <Cursor />
      <div className="max-w-3xl mx-auto">
        <button onClick={handleBack} className="font-mono text-sm text-amber-500 hover:text-amber-400 transition">← Retour au site</button>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mt-8 mb-12">Mentions légales</h1>

        <div className="flex flex-col gap-8 text-gray-400 leading-relaxed">
          <section>
            <h2 className="font-serif text-xl font-bold text-white mb-3">Éditeur du site</h2>
            <p>
              Ce site est édité par Enguerrand Bourghelle, entrepreneur individuel en cours d&apos;immatriculation.
              Contact : enguerrand.bourghelle.agence@gmail.com — 06 35 20 52 57
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-white mb-3">Hébergement</h2>
            <p>
              Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
              Site web : vercel.com
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-white mb-3">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, design, code) est la propriété d&apos;Enguerrand Bourghelle,
              sauf mention contraire. Toute reproduction sans autorisation est interdite.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-white mb-3">Contact</h2>
            <p>
              Pour toute question relative à ce site, vous pouvez me contacter à l&apos;adresse suivante :
              enguerrand.bourghelle.agence@gmail.com — 06 35 20 52 57
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}