PGDMP     !                	    z            coleciomeme    14.5    14.5 6    E           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            F           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            G           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            H           1262    57610    coleciomeme    DATABASE     k   CREATE DATABASE coleciomeme WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE coleciomeme;
                postgres    false            �            1259    57663    collections    TABLE       CREATE TABLE public.collections (
    id integer NOT NULL,
    name character varying(32) NOT NULL,
    creation_date timestamp with time zone DEFAULT now() NOT NULL,
    update_date timestamp with time zone DEFAULT now() NOT NULL,
    file_name character varying
);
    DROP TABLE public.collections;
       public         heap    postgres    false            �            1259    57662    collections_id_seq    SEQUENCE     �   CREATE SEQUENCE public.collections_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.collections_id_seq;
       public          postgres    false    218            I           0    0    collections_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.collections_id_seq OWNED BY public.collections.id;
          public          postgres    false    217            �            1259    57641    memes    TABLE     W  CREATE TABLE public.memes (
    id integer NOT NULL,
    name character varying NOT NULL,
    collection smallint NOT NULL,
    lootable boolean DEFAULT true NOT NULL,
    rare boolean DEFAULT false NOT NULL,
    creation_date timestamp with time zone DEFAULT now() NOT NULL,
    update_date timestamp with time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.memes;
       public         heap    postgres    false            �            1259    57640    memes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.memes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.memes_id_seq;
       public          postgres    false    214            J           0    0    memes_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.memes_id_seq OWNED BY public.memes.id;
          public          postgres    false    213            �            1259    57654    total_items    TABLE       CREATE TABLE public.total_items (
    id bigint NOT NULL,
    ownerid integer NOT NULL,
    itemid integer NOT NULL,
    creation_date timestamp with time zone DEFAULT now() NOT NULL,
    update_date timestamp with time zone DEFAULT now() NOT NULL,
    trading boolean DEFAULT false
);
    DROP TABLE public.total_items;
       public         heap    postgres    false            �            1259    57653    total_items_id_seq    SEQUENCE     �   CREATE SEQUENCE public.total_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.total_items_id_seq;
       public          postgres    false    216            K           0    0    total_items_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.total_items_id_seq OWNED BY public.total_items.id;
          public          postgres    false    215            �            1259    57628    trades    TABLE     8  CREATE TABLE public.trades (
    id bigint NOT NULL,
    author integer NOT NULL,
    offer integer NOT NULL,
    offer_value real DEFAULT 0 NOT NULL,
    request integer,
    creation_date timestamp with time zone DEFAULT now() NOT NULL,
    dealer integer,
    change real DEFAULT 0 NOT NULL,
    answer_date timestamp with time zone,
    closing_date timestamp with time zone,
    status character varying DEFAULT 'open'::character varying NOT NULL,
    cardid integer,
    CONSTRAINT author_check CHECK ((author > 0)),
    CONSTRAINT change_check CHECK ((change >= (0)::double precision)),
    CONSTRAINT offer_value_check CHECK ((offer_value >= (0)::double precision)),
    CONSTRAINT status_check CHECK ((((status)::text = 'open'::text) OR ((status)::text = 'answered'::text) OR ((status)::text = 'closed'::text)))
);
    DROP TABLE public.trades;
       public         heap    postgres    false            �            1259    57627    trades_id_seq    SEQUENCE     �   CREATE SEQUENCE public.trades_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.trades_id_seq;
       public          postgres    false    212            L           0    0    trades_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.trades_id_seq OWNED BY public.trades.id;
          public          postgres    false    211            �            1259    57612    users    TABLE     �  CREATE TABLE public.users (
    id integer NOT NULL,
    usertype character varying DEFAULT 'collector'::character varying NOT NULL,
    name character varying NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    cpf character varying(11) NOT NULL,
    phone character varying(13) NOT NULL,
    active boolean DEFAULT true NOT NULL,
    creation_date timestamp with time zone DEFAULT now() NOT NULL,
    update_date timestamp with time zone DEFAULT now() NOT NULL,
    daily_collect timestamp with time zone DEFAULT now() NOT NULL,
    daily_streak integer DEFAULT 0 NOT NULL,
    wallet bigint DEFAULT 100 NOT NULL,
    cardname character varying,
    cardnum character varying,
    cardcvv character varying(4),
    card_expiration character varying,
    CONSTRAINT usertype_check CHECK ((((usertype)::text = 'collector'::text) OR ((usertype)::text = 'admin'::text))),
    CONSTRAINT wallet_check CHECK (((wallet)::double precision >= (0)::double precision))
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    57611    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    210            M           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    209            �            1259    57672    wallet_orders    TABLE     �  CREATE TABLE public.wallet_orders (
    id integer NOT NULL,
    userid integer NOT NULL,
    value real NOT NULL,
    status character varying DEFAULT 'awaiting payment'::character varying NOT NULL,
    order_date timestamp with time zone DEFAULT now() NOT NULL,
    closing_date timestamp with time zone,
    CONSTRAINT status_check CHECK ((((status)::text = 'awaiting payment'::text) OR ((status)::text = 'confirmed'::text) OR ((status)::text = 'canceled'::text)))
);
 !   DROP TABLE public.wallet_orders;
       public         heap    postgres    false            �            1259    57671    wallet_orders_id_seq    SEQUENCE     �   CREATE SEQUENCE public.wallet_orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.wallet_orders_id_seq;
       public          postgres    false    220            N           0    0    wallet_orders_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.wallet_orders_id_seq OWNED BY public.wallet_orders.id;
          public          postgres    false    219            �           2604    57735    collections id    DEFAULT     p   ALTER TABLE ONLY public.collections ALTER COLUMN id SET DEFAULT nextval('public.collections_id_seq'::regclass);
 =   ALTER TABLE public.collections ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218            �           2604    57736    memes id    DEFAULT     d   ALTER TABLE ONLY public.memes ALTER COLUMN id SET DEFAULT nextval('public.memes_id_seq'::regclass);
 7   ALTER TABLE public.memes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    213    214    214            �           2604    65994    total_items id    DEFAULT     p   ALTER TABLE ONLY public.total_items ALTER COLUMN id SET DEFAULT nextval('public.total_items_id_seq'::regclass);
 =   ALTER TABLE public.total_items ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            �           2604    66006 	   trades id    DEFAULT     f   ALTER TABLE ONLY public.trades ALTER COLUMN id SET DEFAULT nextval('public.trades_id_seq'::regclass);
 8   ALTER TABLE public.trades ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    212    212            {           2604    57739    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210            �           2604    57740    wallet_orders id    DEFAULT     t   ALTER TABLE ONLY public.wallet_orders ALTER COLUMN id SET DEFAULT nextval('public.wallet_orders_id_seq'::regclass);
 ?   ALTER TABLE public.wallet_orders ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            @          0    57663    collections 
   TABLE DATA           V   COPY public.collections (id, name, creation_date, update_date, file_name) FROM stdin;
    public          postgres    false    218   E       <          0    57641    memes 
   TABLE DATA           a   COPY public.memes (id, name, collection, lootable, rare, creation_date, update_date) FROM stdin;
    public          postgres    false    214   �E       >          0    57654    total_items 
   TABLE DATA           _   COPY public.total_items (id, ownerid, itemid, creation_date, update_date, trading) FROM stdin;
    public          postgres    false    216   �H       :          0    57628    trades 
   TABLE DATA           �   COPY public.trades (id, author, offer, offer_value, request, creation_date, dealer, change, answer_date, closing_date, status, cardid) FROM stdin;
    public          postgres    false    212   �I       8          0    57612    users 
   TABLE DATA           �   COPY public.users (id, usertype, name, email, password, cpf, phone, active, creation_date, update_date, daily_collect, daily_streak, wallet, cardname, cardnum, cardcvv, card_expiration) FROM stdin;
    public          postgres    false    210   J       B          0    57672    wallet_orders 
   TABLE DATA           \   COPY public.wallet_orders (id, userid, value, status, order_date, closing_date) FROM stdin;
    public          postgres    false    220   K       O           0    0    collections_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.collections_id_seq', 5, true);
          public          postgres    false    217            P           0    0    memes_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.memes_id_seq', 39, true);
          public          postgres    false    213            Q           0    0    total_items_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.total_items_id_seq', 7, true);
          public          postgres    false    215            R           0    0    trades_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.trades_id_seq', 4, true);
          public          postgres    false    211            S           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 3, true);
          public          postgres    false    209            T           0    0    wallet_orders_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.wallet_orders_id_seq', 1, true);
          public          postgres    false    219            �           2606    57668    collections collections_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.collections
    ADD CONSTRAINT collections_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.collections DROP CONSTRAINT collections_pkey;
       public            postgres    false    218            �           2606    57652    memes memes_pk 
   CONSTRAINT     L   ALTER TABLE ONLY public.memes
    ADD CONSTRAINT memes_pk PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.memes DROP CONSTRAINT memes_pk;
       public            postgres    false    214            �           2606    65996    total_items total_items_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.total_items
    ADD CONSTRAINT total_items_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.total_items DROP CONSTRAINT total_items_pkey;
       public            postgres    false    216            �           2606    66008    trades trades_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.trades
    ADD CONSTRAINT trades_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.trades DROP CONSTRAINT trades_pkey;
       public            postgres    false    212            �           2606    57626    users users_pk 
   CONSTRAINT     L   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pk;
       public            postgres    false    210            �           2606    57679     wallet_orders wallet_orders_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.wallet_orders
    ADD CONSTRAINT wallet_orders_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.wallet_orders DROP CONSTRAINT wallet_orders_pkey;
       public            postgres    false    220            �           2606    57710    memes memes_fk0    FK CONSTRAINT     w   ALTER TABLE ONLY public.memes
    ADD CONSTRAINT memes_fk0 FOREIGN KEY (collection) REFERENCES public.collections(id);
 9   ALTER TABLE ONLY public.memes DROP CONSTRAINT memes_fk0;
       public          postgres    false    3233    214    218            �           2606    57720    total_items total_items_fk0    FK CONSTRAINT     z   ALTER TABLE ONLY public.total_items
    ADD CONSTRAINT total_items_fk0 FOREIGN KEY (ownerid) REFERENCES public.users(id);
 E   ALTER TABLE ONLY public.total_items DROP CONSTRAINT total_items_fk0;
       public          postgres    false    216    210    3225            �           2606    57725    total_items total_items_fk1    FK CONSTRAINT     y   ALTER TABLE ONLY public.total_items
    ADD CONSTRAINT total_items_fk1 FOREIGN KEY (itemid) REFERENCES public.memes(id);
 E   ALTER TABLE ONLY public.total_items DROP CONSTRAINT total_items_fk1;
       public          postgres    false    3229    216    214            �           2606    57685    trades trades_fk0    FK CONSTRAINT     o   ALTER TABLE ONLY public.trades
    ADD CONSTRAINT trades_fk0 FOREIGN KEY (author) REFERENCES public.users(id);
 ;   ALTER TABLE ONLY public.trades DROP CONSTRAINT trades_fk0;
       public          postgres    false    212    210    3225            �           2606    65997    trades trades_fk1    FK CONSTRAINT     t   ALTER TABLE ONLY public.trades
    ADD CONSTRAINT trades_fk1 FOREIGN KEY (offer) REFERENCES public.total_items(id);
 ;   ALTER TABLE ONLY public.trades DROP CONSTRAINT trades_fk1;
       public          postgres    false    212    216    3231            �           2606    74130    trades trades_fk2    FK CONSTRAINT     v   ALTER TABLE ONLY public.trades
    ADD CONSTRAINT trades_fk2 FOREIGN KEY (request) REFERENCES public.total_items(id);
 ;   ALTER TABLE ONLY public.trades DROP CONSTRAINT trades_fk2;
       public          postgres    false    3231    212    216            �           2606    57700    trades trades_fk3    FK CONSTRAINT     o   ALTER TABLE ONLY public.trades
    ADD CONSTRAINT trades_fk3 FOREIGN KEY (dealer) REFERENCES public.users(id);
 ;   ALTER TABLE ONLY public.trades DROP CONSTRAINT trades_fk3;
       public          postgres    false    210    212    3225            �           2606    57715    wallet_orders wallet_orders_fk0    FK CONSTRAINT     }   ALTER TABLE ONLY public.wallet_orders
    ADD CONSTRAINT wallet_orders_fk0 FOREIGN KEY (userid) REFERENCES public.users(id);
 I   ALTER TABLE ONLY public.wallet_orders DROP CONSTRAINT wallet_orders_fk0;
       public          postgres    false    220    3225    210            @   �   x���?�0G��S�95�]rM�����U)Q���6~�G���{��U{=Q�а@�\y��"����H]����ul��! $�ОKe��IS��66�%�us�a�(&+Tz�g��gi
�e�Z�K�թ9~$�%��"�*k'�Y��a�a)����'�Z!��>�a~��ɝ�R��V�      <     x�}�M��F���S�]�?Y:KVf�EЋ �~�鸢rS��0�P�)Iz#w�oD����o��w}��	�I~�y�D#Rh�;ʽ
��Nd��|�������<�;���� ��N�c�D;�AvWA�*�9~��~E%�9���U�Eu�z�gf��`�CB�Z�Y_Ԙ�>�������A-��B,j����l�L̞zV!��:�L��* <��:PS��U���Lα���2�TKk�'�'�>x��G0�h�ꃯ*-l�9�/�σ�C�Ѻ�*��_Ni�o��} Q9���*��_Ίd%�8����4g{_�
����:ЃmdDx����g���Α��ݥ�*��c.($y�U�MQ���*P,.�%]����ԓ�L&"nw&�Cd��k���-��
���Rmof=��gx�L,���57����U��3	�jB��_�JX2���*�򙤘�bY���س
�|&�p��}�\�;��*�򙢰��q)*��θ���fZ�Vn�6�Q�@��lW�����_7��j��خ/����m��ë4���]^6Ӛq�U�fҙwW���j�A��+��pPP[`�
�\���x��G���3쮂,��r��|�9�h�u�� �e�&~�o��Z0,�ǞD�e2+��m��C%���MY3M����b����YlWA���ӧ�d`>6�*���-���,�E�u~�~�<�J�M�� �c�X��u�&sM�&�dy,��k��6�.ֳ��UB�C�@INk쵋�� ��<��      >   �   x�����0Ckq�,`}Hy�Ԛ��_�N�y��� 21�J��=�'j�;-蔥H�������&_tJ���@�r��b��N��SU-Ê��bk��@4�C� ���M��~*s3�#h�N�]i�R_i�Z��/z�j3�p}����K�YD>��de      :   W   x�m˻�0���<$�#�I�`����� ���3(���j.b��T�����a���K&�~�uj���l^��b��U����      8   �   x���AN�0E��)���6MV�5�Ŭg�i��RSKe�B���Te4� ��[_V����~���e��}b�����N5���kzI=kS��r�@�Yf\��9'�I��y��`EΖ�r��J�p�
y��)��F3�p���'��"��?������>��ˊ��6~��'�5��X����i�Sa�)����q�o���o�?�9L0����y�׼�=;ŖmI߉��._��=�,�> }}��      B   K   x�3�4�4466�L��K�,�MM�4202�54�54V04�2��26�3��01��50Ɣ51ҳ4�477�r��qqq D.     