
--   Base PostgreSQL - MediTrack Core

DROP TABLE IF EXISTS mouvements;
DROP TABLE IF EXISTS produits;
DROP TABLE IF EXISTS depots;

--  Table: depots

CREATE TABLE depots (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    adresse VARCHAR(200) NOT NULL
);

--  Table: produits

CREATE TABLE produits (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    code VARCHAR(50) NOT NULL,
    quantite INTEGER NOT NULL DEFAULT 0,
    depot_id INTEGER REFERENCES depots(id) ON DELETE CASCADE
);

--  Table: mouvements

CREATE TABLE mouvements (
    id SERIAL PRIMARY KEY,
    type VARCHAR(10) NOT NULL CHECK (type IN ('IN','OUT')),
    quantite INTEGER NOT NULL CHECK (quantite > 0),
    produit_id INTEGER REFERENCES produits(id) ON DELETE CASCADE,
    date TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Données exemple (optionnel mais utile pour tester)

INSERT INTO depots (nom, adresse)
VALUES ('Dépôt Central', '12 rue des Hôpitaux, Paris');

INSERT INTO produits (nom, code, quantite, depot_id)
VALUES ('Gants stériles', 'GST-001', 50, 1);
