// ============================================================
//  BEE HAPPY - Configuration
//  >>> C'EST LE SEUL FICHIER QUE TU DOIS MODIFIER <<<
// ============================================================

const CONFIG = {

  // --- 1. Connexion Supabase -------------------------------
  // A recuperer dans Supabase : Project Settings > API
  SUPABASE_URL: "https://sqjqrndjkvimkwgnrxuz.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxanFybmRqa3ZpbWt3Z25yeHV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY2OTU4MDEsImV4cCI6MjEwMjI3MTgwMX0.IBVYD1SjD7iE_uTvhXzBE2aIJvdW7EtTbw3qqEg7BPM",

  // --- 2. Coordonnees affichees sur le site ----------------
  NOM_COMMERCE: "BeeHappy",
  SOUS_TITRE: "Miel de Heilligenberg — Alsace",
  PRODUCTEUR: "C. Godmet",
  TELEPHONE: "06.81.38.03.15",
  EMAIL: "cgodmet@yahoo.fr",                       // laisse vide si tu n'en veux pas
  ADRESSE_RETRAIT: "Strasbourg (67190) — adresse communiquée par téléphone",

  // --- 3. Options de livraison -----------------------------
  FRAIS_LIVRAISON_LOCALE: 0,       // en euros, 0 = gratuit
  FRAIS_ENVOI_POSTAL: 5.00,        // en euros
  ZONE_LIVRAISON: "Heilligenberg et communes alentour (environ 15 km)",

  // --- 4. Textes libres ------------------------------------
  MESSAGE_ACCUEIL: "Miel récolté et mis en pot à la main, dans notre rucher familial en Alsace.",
  MESSAGE_PAIEMENT: "Le paiement se fait au moment de la remise du miel, en espèces ou par chèque. Aucun paiement en ligne n'est demandé."
};
