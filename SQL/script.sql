--
-- PostgreSQL database dump
--

-- Dumped from database version 9.4.1
-- Dumped by pg_dump version 9.4.0
-- Started on 2017-02-02 17:28:51

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- TOC entry 8 (class 2615 OID 114694)
-- Name: treasury; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA treasury;


SET search_path = treasury, pg_catalog;

SET default_with_oids = false;

--
-- TOC entry 265 (class 1259 OID 114963)
-- Name: liability; Type: TABLE; Schema: treasury; Owner: -
--

CREATE TABLE liability (
    id integer NOT NULL,
    party_id integer NOT NULL,
    unit_id integer NOT NULL,
    amount numeric(12,2) NOT NULL
);


--
-- TOC entry 264 (class 1259 OID 114961)
-- Name: liability_id_seq; Type: SEQUENCE; Schema: treasury; Owner: -
--

CREATE SEQUENCE liability_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2355 (class 0 OID 0)
-- Dependencies: 264
-- Name: liability_id_seq; Type: SEQUENCE OWNED BY; Schema: treasury; Owner: -
--

ALTER SEQUENCE liability_id_seq OWNED BY liability.id;


--
-- TOC entry 267 (class 1259 OID 114971)
-- Name: liability_payment; Type: TABLE; Schema: treasury; Owner: -
--

CREATE TABLE liability_payment (
    id integer NOT NULL,
    liability_id integer NOT NULL,
    payment_id integer NOT NULL,
    covered_amount numeric(12,2) NOT NULL
);


--
-- TOC entry 266 (class 1259 OID 114969)
-- Name: liability_payment_id_seq; Type: SEQUENCE; Schema: treasury; Owner: -
--

CREATE SEQUENCE liability_payment_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2356 (class 0 OID 0)
-- Dependencies: 266
-- Name: liability_payment_id_seq; Type: SEQUENCE OWNED BY; Schema: treasury; Owner: -
--

ALTER SEQUENCE liability_payment_id_seq OWNED BY liability_payment.id;


--
-- TOC entry 269 (class 1259 OID 114979)
-- Name: party; Type: TABLE; Schema: treasury; Owner: -
--

CREATE TABLE party (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);


--
-- TOC entry 268 (class 1259 OID 114977)
-- Name: party_id_seq; Type: SEQUENCE; Schema: treasury; Owner: -
--

CREATE SEQUENCE party_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2357 (class 0 OID 0)
-- Dependencies: 268
-- Name: party_id_seq; Type: SEQUENCE OWNED BY; Schema: treasury; Owner: -
--

ALTER SEQUENCE party_id_seq OWNED BY party.id;


--
-- TOC entry 271 (class 1259 OID 114987)
-- Name: payment; Type: TABLE; Schema: treasury; Owner: -
--

CREATE TABLE payment (
    id integer NOT NULL,
    party_id integer NOT NULL,
    amount numeric(12,2) NOT NULL,
    unit_id integer NOT NULL
);


--
-- TOC entry 270 (class 1259 OID 114985)
-- Name: payment_id_seq; Type: SEQUENCE; Schema: treasury; Owner: -
--

CREATE SEQUENCE payment_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2358 (class 0 OID 0)
-- Dependencies: 270
-- Name: payment_id_seq; Type: SEQUENCE OWNED BY; Schema: treasury; Owner: -
--

ALTER SEQUENCE payment_id_seq OWNED BY payment.id;


--
-- TOC entry 272 (class 1259 OID 114993)
-- Name: unit; Type: TABLE; Schema: treasury; Owner: -
--

CREATE TABLE unit (
    id integer NOT NULL
);


--
-- TOC entry 2205 (class 2604 OID 114966)
-- Name: id; Type: DEFAULT; Schema: treasury; Owner: -
--

ALTER TABLE ONLY liability ALTER COLUMN id SET DEFAULT nextval('liability_id_seq'::regclass);


--
-- TOC entry 2206 (class 2604 OID 114974)
-- Name: id; Type: DEFAULT; Schema: treasury; Owner: -
--

ALTER TABLE ONLY liability_payment ALTER COLUMN id SET DEFAULT nextval('liability_payment_id_seq'::regclass);


--
-- TOC entry 2207 (class 2604 OID 114982)
-- Name: id; Type: DEFAULT; Schema: treasury; Owner: -
--

ALTER TABLE ONLY party ALTER COLUMN id SET DEFAULT nextval('party_id_seq'::regclass);


--
-- TOC entry 2208 (class 2604 OID 114990)
-- Name: id; Type: DEFAULT; Schema: treasury; Owner: -
--

ALTER TABLE ONLY payment ALTER COLUMN id SET DEFAULT nextval('payment_id_seq'::regclass);


--
-- TOC entry 2343 (class 0 OID 114963)
-- Dependencies: 265
-- Data for Name: liability; Type: TABLE DATA; Schema: treasury; Owner: -
--

INSERT INTO liability (id, party_id, unit_id, amount) VALUES (1, 1, 2, 100.00);
INSERT INTO liability (id, party_id, unit_id, amount) VALUES (2, 2, 3, 50.00);
INSERT INTO liability (id, party_id, unit_id, amount) VALUES (3, 3, 1, -50.00);


--
-- TOC entry 2359 (class 0 OID 0)
-- Dependencies: 264
-- Name: liability_id_seq; Type: SEQUENCE SET; Schema: treasury; Owner: -
--

SELECT pg_catalog.setval('liability_id_seq', 3, true);


--
-- TOC entry 2345 (class 0 OID 114971)
-- Dependencies: 267
-- Data for Name: liability_payment; Type: TABLE DATA; Schema: treasury; Owner: -
--



--
-- TOC entry 2360 (class 0 OID 0)
-- Dependencies: 266
-- Name: liability_payment_id_seq; Type: SEQUENCE SET; Schema: treasury; Owner: -
--

SELECT pg_catalog.setval('liability_payment_id_seq', 1, false);


--
-- TOC entry 2347 (class 0 OID 114979)
-- Dependencies: 269
-- Data for Name: party; Type: TABLE DATA; Schema: treasury; Owner: -
--

INSERT INTO party (id, name) VALUES (1, 'ISD');
INSERT INTO party (id, name) VALUES (2, 'AMK');
INSERT INTO party (id, name) VALUES (3, 'DMKD');
INSERT INTO party (id, name) VALUES (4, 'Huta');
INSERT INTO party (id, name) VALUES (5, 'Dunaferr');
INSERT INTO party (id, name) VALUES (6, 'Duferco');
INSERT INTO party (id, name) VALUES (7, 'UGMK');


--
-- TOC entry 2361 (class 0 OID 0)
-- Dependencies: 268
-- Name: party_id_seq; Type: SEQUENCE SET; Schema: treasury; Owner: -
--

SELECT pg_catalog.setval('party_id_seq', 7, true);


--
-- TOC entry 2349 (class 0 OID 114987)
-- Dependencies: 271
-- Data for Name: payment; Type: TABLE DATA; Schema: treasury; Owner: -
--

INSERT INTO payment (id, party_id, amount, unit_id) VALUES (1, 1, 100.00, 2);
INSERT INTO payment (id, party_id, amount, unit_id) VALUES (2, 2, 50.00, 3);


--
-- TOC entry 2362 (class 0 OID 0)
-- Dependencies: 270
-- Name: payment_id_seq; Type: SEQUENCE SET; Schema: treasury; Owner: -
--

SELECT pg_catalog.setval('payment_id_seq', 2, true);


--
-- TOC entry 2350 (class 0 OID 114993)
-- Dependencies: 272
-- Data for Name: unit; Type: TABLE DATA; Schema: treasury; Owner: -
--

INSERT INTO unit (id) VALUES (1);
INSERT INTO unit (id) VALUES (2);
INSERT INTO unit (id) VALUES (3);
INSERT INTO unit (id) VALUES (4);
INSERT INTO unit (id) VALUES (5);


--
-- TOC entry 2218 (class 2606 OID 114984)
-- Name: PK1; Type: CONSTRAINT; Schema: treasury; Owner: -
--

ALTER TABLE ONLY party
    ADD CONSTRAINT "PK1" PRIMARY KEY (id);


--
-- TOC entry 2210 (class 2606 OID 114968)
-- Name: PK2; Type: CONSTRAINT; Schema: treasury; Owner: -
--

ALTER TABLE ONLY liability
    ADD CONSTRAINT "PK2" PRIMARY KEY (id);


--
-- TOC entry 2220 (class 2606 OID 114992)
-- Name: PK3; Type: CONSTRAINT; Schema: treasury; Owner: -
--

ALTER TABLE ONLY payment
    ADD CONSTRAINT "PK3" PRIMARY KEY (id);


--
-- TOC entry 2214 (class 2606 OID 114976)
-- Name: PK5; Type: CONSTRAINT; Schema: treasury; Owner: -
--

ALTER TABLE ONLY liability_payment
    ADD CONSTRAINT "PK5" PRIMARY KEY (id);


--
-- TOC entry 2224 (class 2606 OID 114997)
-- Name: PK6; Type: CONSTRAINT; Schema: treasury; Owner: -
--

ALTER TABLE ONLY unit
    ADD CONSTRAINT "PK6" PRIMARY KEY (id);


--
-- TOC entry 2225 (class 1259 OID 115003)
-- Name: Ref110; Type: INDEX; Schema: treasury; Owner: -
--

CREATE INDEX "Ref110" ON unit USING btree (id);


--
-- TOC entry 2221 (class 1259 OID 115002)
-- Name: Ref13; Type: INDEX; Schema: treasury; Owner: -
--

CREATE INDEX "Ref13" ON payment USING btree (party_id);


--
-- TOC entry 2211 (class 1259 OID 114998)
-- Name: Ref14; Type: INDEX; Schema: treasury; Owner: -
--

CREATE INDEX "Ref14" ON liability USING btree (party_id);


--
-- TOC entry 2215 (class 1259 OID 115000)
-- Name: Ref27; Type: INDEX; Schema: treasury; Owner: -
--

CREATE INDEX "Ref27" ON liability_payment USING btree (liability_id);


--
-- TOC entry 2216 (class 1259 OID 115001)
-- Name: Ref38; Type: INDEX; Schema: treasury; Owner: -
--

CREATE INDEX "Ref38" ON liability_payment USING btree (payment_id);


--
-- TOC entry 2212 (class 1259 OID 114999)
-- Name: Ref611; Type: INDEX; Schema: treasury; Owner: -
--

CREATE INDEX "Ref611" ON liability USING btree (unit_id);


--
-- TOC entry 2222 (class 1259 OID 115045)
-- Name: fki_Refunit12; Type: INDEX; Schema: treasury; Owner: -
--

CREATE INDEX "fki_Refunit12" ON payment USING btree (unit_id);


--
-- TOC entry 2229 (class 2606 OID 115014)
-- Name: Refliability7; Type: FK CONSTRAINT; Schema: treasury; Owner: -
--

ALTER TABLE ONLY liability_payment
    ADD CONSTRAINT "Refliability7" FOREIGN KEY (liability_id) REFERENCES liability(id);


--
-- TOC entry 2232 (class 2606 OID 115029)
-- Name: Refparty10; Type: FK CONSTRAINT; Schema: treasury; Owner: -
--

ALTER TABLE ONLY unit
    ADD CONSTRAINT "Refparty10" FOREIGN KEY (id) REFERENCES party(id);


--
-- TOC entry 2231 (class 2606 OID 115024)
-- Name: Refparty3; Type: FK CONSTRAINT; Schema: treasury; Owner: -
--

ALTER TABLE ONLY payment
    ADD CONSTRAINT "Refparty3" FOREIGN KEY (party_id) REFERENCES party(id);


--
-- TOC entry 2227 (class 2606 OID 115004)
-- Name: Refparty4; Type: FK CONSTRAINT; Schema: treasury; Owner: -
--

ALTER TABLE ONLY liability
    ADD CONSTRAINT "Refparty4" FOREIGN KEY (party_id) REFERENCES party(id);


--
-- TOC entry 2228 (class 2606 OID 115019)
-- Name: Refpayment8; Type: FK CONSTRAINT; Schema: treasury; Owner: -
--

ALTER TABLE ONLY liability_payment
    ADD CONSTRAINT "Refpayment8" FOREIGN KEY (payment_id) REFERENCES payment(id);


--
-- TOC entry 2226 (class 2606 OID 115009)
-- Name: Refunit11; Type: FK CONSTRAINT; Schema: treasury; Owner: -
--

ALTER TABLE ONLY liability
    ADD CONSTRAINT "Refunit11" FOREIGN KEY (unit_id) REFERENCES unit(id);


--
-- TOC entry 2230 (class 2606 OID 115040)
-- Name: Refunit12; Type: FK CONSTRAINT; Schema: treasury; Owner: -
--

ALTER TABLE ONLY payment
    ADD CONSTRAINT "Refunit12" FOREIGN KEY (unit_id) REFERENCES unit(id);


-- Completed on 2017-02-02 17:28:51

--
-- PostgreSQL database dump complete
--
