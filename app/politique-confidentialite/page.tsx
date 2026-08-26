"use client";
import { useRouter } from "next/navigation";
import Cursor from "../../components/Cursor";

export default function PolitiqueConfidentialite() {
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
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mt-8 mb-12">Politique de confidentialité</h1>

        <div className="flex flex-col gap-8 text-gray-400 leading-relaxed">
          <section>
            <h2 className="font-serif text-xl font-bold text-white mb-3">Données collectées</h2>
            <p>
              Lorsque vous remplissez le formulaire de contact de ce site, les données suivantes sont collectées :
              votre nom, votre adresse email, votre numéro de téléphone, et le message que vous rédigez.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-white mb-3">Utilisation des données</h2>
            <p>
              Ces informations sont utilisées uniquement dans le but de répondre à votre demande de devis ou
              de contact. Elles ne sont ni vendues, ni partagées avec des tiers à des fins commerciales.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-white mb-3">Traitement par un prestataire tiers</h2>
            <p>
              Le formulaire de contact utilise le service Formspree pour l&apos;envoi des messages. Les données que vous
              soumettez transitent par ce service avant de m&apos;être transmises par email. Formspree applique ses propres
              mesures de sécurité et de conformité, disponibles sur formspree.io.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-white mb-3">Durée de conservation</h2>
            <p>
              Vos données sont conservées le temps nécessaire au traitement de votre demande, puis supprimées
              dans un délai raisonnable si aucune suite commerciale n&apos;est donnée.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-white mb-3">Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos
              données. Pour exercer ces droits, contactez-moi à l&apos;adresse suivante :
              enguerrand.bourghelle.agence@gmail.com
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-white mb-3">Cookies</h2>
            <p>
              Ce site n&apos;utilise pas de cookies de suivi ou de publicité. Seuls des cookies techniques,
              nécessaires au bon fonctionnement du site, peuvent être utilisés par les services d&apos;hébergement.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}