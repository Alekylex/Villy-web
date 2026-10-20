/* =========================================================================
   LEGAL PAGE — legal notice, privacy, cookies and booking terms
   in English · Čeština · Español · Deutsch. Rendered into legal.html.

   The texts are the same for both villas; everything that differs (the
   owner's details, licence, times, deposit, cancellation…) comes from
   VILLA_CONFIG.legal in js/config.js. Anything still empty there shows up
   on the page highlighted as "to be completed".

   Have these texts checked by your gestor / a Spanish lawyer before launch.
   ========================================================================= */
(function () {
  "use strict";

  const CFG = window.VILLA_CONFIG || {};
  const L = CFG.legal || {};
  const I18N = window.I18N;

  const TODO = { en: "to be completed", cs: "doplnit", es: "pendiente", de: "noch zu ergänzen" };

  const TEXT = {
    /* ================================================================ EN */
    en: {
      title: "Legal information",
      updated: "Last updated",
      back: "Back to the website",
      toc: "On this page",
      sections: [
        { id: "legal", h: "Legal notice", html: `
<p>This website is operated in accordance with Spanish Law 34/2002 on information society services (LSSI-CE).</p>
<dl class="facts">
  <dt>Owner and operator</dt><dd>{owner}</dd>
  <dt>Tax ID (NIF/NIE)</dt><dd>{nif}</dd>
  <dt>Address</dt><dd>{address}</dd>
  <dt>Email</dt><dd>{email}</dd>
  <dt>Phone</dt><dd>{phone}</dd>
  <dt>Activity</dt><dd>Holiday rental of the property {villa}, La Tejita, Granadilla de Abona, Tenerife</dd>
  <dt>Holiday rental licence</dt><dd>{licence} (Registro General Turístico de Canarias)</dd>
</dl>
<h3>Content and photos</h3>
<p>The texts, design and photos of the property on this website belong to the owner and may not be copied without permission. Some landscape photos come from Pexels and Unsplash and are used under their free licences.</p>
<h3>Liability</h3>
<p>We keep the information on this website as accurate and up to date as we can, but prices and availability are only binding once we confirm your booking in writing. We are not responsible for the content of external websites we link to.</p>
<h3>Complaints and applicable law</h3>
<p>Official complaint forms (hojas de reclamaciones) are available at the property. This website and all bookings are governed by Spanish law; if you are a consumer, you keep the protection of the mandatory laws of your country of residence.</p>` },

        { id: "privacy", h: "Privacy policy", html: `
<p>We take the protection of your personal data seriously and handle it in line with the EU General Data Protection Regulation (GDPR) and Spanish Organic Law 3/2018 (LOPDGDD).</p>
<h3>Who is responsible</h3>
<p>{owner}, {address}, {email}.</p>
<h3>What we collect and why</h3>
<ul>
  <li><strong>Booking requests:</strong> name, email, phone (optional), stay dates, number of guests, children's ages, extras and your message. We use them to answer your request and, if you book, to prepare and carry out your stay. Legal basis: steps prior to a contract and performance of the contract (Art. 6(1)(b) GDPR).</li>
  <li><strong>Guest registration:</strong> on arrival Spanish law (Royal Decree 933/2021) requires us to record the identity details of every adult guest and pass them to the police through the SES.Hospedajes system. Legal basis: legal obligation (Art. 6(1)(c) GDPR).</li>
  <li><strong>Accounting and tax:</strong> invoices and payment details, kept because the law requires it (Art. 6(1)(c) GDPR).</li>
  <li><strong>Website operation:</strong> our hosting provider briefly records technical data such as your IP address to deliver the website and keep it secure (legitimate interest, Art. 6(1)(f) GDPR).</li>
</ul>
<p>We do not use your data for advertising, do not sell it and do not make automated decisions or profiles.</p>
<h3>Who receives your data</h3>
<ul>
  <li>our email and hosting providers, which process data only on our behalf;</li>
  <li>the online form service we use to deliver booking requests to our inbox{formNote};</li>
  <li>the Spanish police and authorities (guest registration), our tax advisor and, where required, the tax office;</li>
  <li>Google, only if you click "Show map" (see Cookies).</li>
</ul>
<p>Our availability calendar is synchronised with Booking.com and Airbnb; only booked dates are exchanged, never your personal details.</p>
<h3>How long we keep it</h3>
<p>Requests that do not lead to a booking are deleted after 12 months. Booking and registration data are kept as long as the law requires (guest registration 3 years, tax and accounting records up to 6 years) and then deleted.</p>
<h3>Your rights</h3>
<p>You can ask us for access to your data, correction, deletion, restriction of processing, data portability, and you can object to processing, by writing to {email}. You also have the right to complain to the Spanish Data Protection Agency (<a href="https://www.aepd.es" rel="noopener">www.aepd.es</a>) or the authority of your own country.</p>` },

        { id: "cookies", h: "Cookies", html: `
<p>This website does not use cookies for statistics, advertising or tracking, and loads no third-party trackers. That is why there is no cookie banner.</p>
<p>Your browser only stores two small preferences in its local storage: the language you chose and whether you hid the photo thumbnails. They never leave your device and you can delete them at any time in your browser settings.</p>
<p>The map is not loaded until you click "Show map". From that moment Google may set its own cookies; see <a href="https://policies.google.com/privacy" rel="noopener">Google's privacy policy</a>.</p>` },

        { id: "terms", h: "Booking terms", html: `
<h3>1. How booking works</h3>
<p>Sending the form on this website is a non-binding request. We reply within 24 hours with a confirmation and the payment details. The booking becomes binding once you have paid the deposit.</p>
<h3>2. Price</h3>
<p>Prices are per night for the whole property, for up to {maxGuests} guests. The price shown on the website is a calculation; the final price is the one in our written confirmation.</p>
<h3>3. Payment</h3>
<ul>
  <li>Deposit: {depositPercent} % of the total price when you confirm the booking.</li>
  <li>Balance: no later than {balanceDays} days before arrival.</li>
  <li>Payment methods: {paymentMethods}.</li>
  <li>Security deposit: {securityDeposit}, returned after departure if there is no damage.</li>
</ul>
<h3>4. Cancellation and changes</h3>
<ul>
  <li>Cancellation up to {freeCancelDays} days before arrival: free of charge, we refund all payments.</li>
  <li>Later cancellation or no-show: the deposit is kept; payments beyond the deposit are refunded.</li>
  <li>Changes of dates are possible subject to availability.</li>
</ul>
<p>Please send cancellations by email to {email}. We recommend travel insurance.</p>
<h3>5. Arrival and departure</h3>
<p>Check-in {checkin}, check-out {checkout}. Minimum stay {minNights} nights. On arrival every adult guest must show a valid ID card or passport (legal requirement).</p>
<h3>6. Stay and house rules</h3>
<ul>
  <li>Maximum {maxGuests} guests, children included; no extra guests without our consent.</li>
  <li>No smoking inside, no parties or events.</li>
  <li>Pets only by prior agreement.</li>
  <li>Please treat the property with care and report any damage; guests are liable for damage they cause.</li>
</ul>
<h3>7. Liability</h3>
<p>We are not liable for interruptions beyond our control (for example water or power cuts, works in the complex, weather) or for the loss of guests' belongings. Use of the pools in the complex is at your own risk and subject to the complex rules.</p>
<h3>8. Complaints and law</h3>
<p>Please tell us straight away if anything is not right so we can fix it. Complaint forms are available at the property. Spanish law applies, without prejudice to your rights as a consumer.</p>` }
      ]
    },

    /* ================================================================ CS */
    cs: {
      title: "Právní informace",
      updated: "Poslední aktualizace",
      back: "Zpět na web",
      toc: "Na této stránce",
      sections: [
        { id: "legal", h: "Právní upozornění", html: `
<p>Tento web je provozován v souladu se španělským zákonem 34/2002 o službách informační společnosti (LSSI-CE).</p>
<dl class="facts">
  <dt>Vlastník a provozovatel</dt><dd>{owner}</dd>
  <dt>Daňové číslo (NIF/NIE)</dt><dd>{nif}</dd>
  <dt>Adresa</dt><dd>{address}</dd>
  <dt>E-mail</dt><dd>{email}</dd>
  <dt>Telefon</dt><dd>{phone}</dd>
  <dt>Činnost</dt><dd>Prázdninový pronájem nemovitosti {villa}, La Tejita, Granadilla de Abona, Tenerife</dd>
  <dt>Licence pro prázdninový pronájem</dt><dd>{licence} (Registro General Turístico de Canarias)</dd>
</dl>
<h3>Obsah a fotografie</h3>
<p>Texty, design a fotografie nemovitosti na tomto webu patří vlastníkovi a bez svolení se nesmí kopírovat. Některé fotografie krajiny pochází z Pexels a Unsplash a jsou použity podle jejich bezplatných licencí.</p>
<h3>Odpovědnost</h3>
<p>Informace na webu udržujeme co nejpřesnější a aktuální, ceny a dostupnost jsou ale závazné až po našem písemném potvrzení rezervace. Za obsah cizích webů, na které odkazujeme, neodpovídáme.</p>
<h3>Stížnosti a rozhodné právo</h3>
<p>Úřední formuláře pro stížnosti (hojas de reclamaciones) jsou k dispozici v nemovitosti. Web i všechny rezervace se řídí španělským právem; jste-li spotřebitel, zůstává vám ochrana podle kogentních předpisů země vašeho bydliště.</p>` },

        { id: "privacy", h: "Ochrana osobních údajů", html: `
<p>Ochranu vašich osobních údajů bereme vážně a zpracováváme je v souladu s obecným nařízením EU o ochraně osobních údajů (GDPR) a španělským zákonem 3/2018 (LOPDGDD).</p>
<h3>Kdo je správce</h3>
<p>{owner}, {address}, {email}.</p>
<h3>Jaké údaje a proč</h3>
<ul>
  <li><strong>Poptávky:</strong> jméno, e-mail, telefon (nepovinně), termín, počet hostů, věk dětí, doplňky a vaše zpráva. Slouží k odpovědi na poptávku a v případě rezervace k přípravě a průběhu pobytu. Právní základ: jednání před uzavřením smlouvy a plnění smlouvy (čl. 6 odst. 1 písm. b) GDPR).</li>
  <li><strong>Registrace hostů:</strong> při příjezdu nám španělský zákon (královský dekret 933/2021) ukládá zaznamenat totožnost každého dospělého hosta a předat ji policii přes systém SES.Hospedajes. Právní základ: právní povinnost (čl. 6 odst. 1 písm. c) GDPR).</li>
  <li><strong>Účetnictví a daně:</strong> faktury a platby, které uchováváme ze zákona (čl. 6 odst. 1 písm. c) GDPR).</li>
  <li><strong>Provoz webu:</strong> náš poskytovatel hostingu krátkodobě zaznamenává technické údaje, například IP adresu, aby web doručil a zabezpečil (oprávněný zájem, čl. 6 odst. 1 písm. f) GDPR).</li>
</ul>
<p>Vaše údaje nepoužíváme k reklamě, neprodáváme je a neprovádíme automatizované rozhodování ani profilování.</p>
<h3>Komu údaje předáváme</h3>
<ul>
  <li>našim poskytovatelům e-mailu a hostingu, kteří je zpracovávají jen naším jménem;</li>
  <li>službě pro odesílání formuláře, která doručuje poptávky do naší schránky{formNote};</li>
  <li>španělské policii a úřadům (registrace hostů), našemu daňovému poradci a případně finančnímu úřadu;</li>
  <li>společnosti Google, jen pokud kliknete na „Zobrazit mapu“ (viz Cookies).</li>
</ul>
<p>Kalendář obsazenosti synchronizujeme s Booking.com a Airbnb; vyměňují se jen obsazené termíny, nikdy vaše osobní údaje.</p>
<h3>Jak dlouho údaje uchováváme</h3>
<p>Poptávky, ze kterých nevznikne rezervace, mažeme po 12 měsících. Údaje o rezervacích a registraci hostů uchováváme po dobu, kterou vyžaduje zákon (registrace hostů 3 roky, daňové a účetní doklady až 6 let), a poté je smažeme.</p>
<h3>Vaše práva</h3>
<p>Máte právo na přístup ke svým údajům, jejich opravu, výmaz, omezení zpracování a přenositelnost a můžete vznést námitku proti zpracování; stačí napsat na {email}. Máte také právo podat stížnost u španělského úřadu pro ochranu osobních údajů (<a href="https://www.aepd.es" rel="noopener">www.aepd.es</a>) nebo u úřadu ve vaší zemi (v Česku ÚOOÚ).</p>` },

        { id: "cookies", h: "Cookies", html: `
<p>Tento web nepoužívá cookies pro statistiky, reklamu ani sledování a nenačítá žádné sledovací nástroje třetích stran. Proto nemá cookie lištu.</p>
<p>Váš prohlížeč si do svého místního úložiště ukládá jen dvě drobná nastavení: zvolený jazyk a zda jste skryli náhledy fotek. Nikdy neopustí vaše zařízení a v nastavení prohlížeče je můžete kdykoli smazat.</p>
<p>Mapa se načte až po kliknutí na „Zobrazit mapu“. Od té chvíle může Google ukládat vlastní cookies; viz <a href="https://policies.google.com/privacy" rel="noopener">zásady ochrany soukromí Google</a>.</p>` },

        { id: "terms", h: "Rezervační podmínky", html: `
<h3>1. Jak rezervace probíhá</h3>
<p>Odeslání formuláře na webu je nezávazná poptávka. Do 24 hodin odpovíme s potvrzením a platebními údaji. Rezervace se stává závaznou zaplacením zálohy.</p>
<h3>2. Cena</h3>
<p>Ceny jsou za noc za celou nemovitost, až pro {maxGuests} hostů. Cena zobrazená na webu je orientační výpočet; konečná cena je ta v našem písemném potvrzení.</p>
<h3>3. Platba</h3>
<ul>
  <li>Záloha: {depositPercent} % z celkové ceny při potvrzení rezervace.</li>
  <li>Doplatek: nejpozději {balanceDays} dní před příjezdem.</li>
  <li>Způsob platby: {paymentMethods}.</li>
  <li>Vratná kauce: {securityDeposit}, vrácená po odjezdu, pokud nevznikla škoda.</li>
</ul>
<h3>4. Storno a změny</h3>
<ul>
  <li>Zrušení nejpozději {freeCancelDays} dní před příjezdem: zdarma, vrátíme všechny platby.</li>
  <li>Pozdější zrušení nebo nedostavení se: záloha propadá; platby nad rámec zálohy vrátíme.</li>
  <li>Změna termínu je možná podle volné kapacity.</li>
</ul>
<p>Zrušení nám prosím pošlete e-mailem na {email}. Doporučujeme cestovní pojištění.</p>
<h3>5. Příjezd a odjezd</h3>
<p>Check-in {checkin}, check-out {checkout}. Minimální délka pobytu {minNights} nocí. Při příjezdu musí každý dospělý host předložit platný občanský průkaz nebo pas (zákonná povinnost).</p>
<h3>6. Pobyt a domovní řád</h3>
<ul>
  <li>Maximálně {maxGuests} hostů včetně dětí; další osoby jen s naším souhlasem.</li>
  <li>Uvnitř se nekouří, večírky a akce nejsou povoleny.</li>
  <li>Domácí mazlíčci jen po předchozí domluvě.</li>
  <li>S nemovitostí prosím zacházejte šetrně a případné škody nám nahlaste; za způsobené škody odpovídají hosté.</li>
</ul>
<h3>7. Odpovědnost</h3>
<p>Neodpovídáme za výpadky mimo naši kontrolu (například výpadek vody nebo elektřiny, práce v areálu, počasí) ani za ztrátu věcí hostů. Bazény v areálu používáte na vlastní nebezpečí a podle pravidel areálu.</p>
<h3>8. Stížnosti a právo</h3>
<p>Pokud něco není v pořádku, dejte nám prosím hned vědět, ať to můžeme napravit. Formuláře pro stížnosti jsou k dispozici v nemovitosti. Platí španělské právo, aniž jsou dotčena vaše práva spotřebitele.</p>` }
      ]
    },

    /* ================================================================ ES */
    es: {
      title: "Información legal",
      updated: "Última actualización",
      back: "Volver a la web",
      toc: "En esta página",
      sections: [
        { id: "legal", h: "Aviso legal", html: `
<p>En cumplimiento de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se facilitan los siguientes datos:</p>
<dl class="facts">
  <dt>Titular</dt><dd>{owner}</dd>
  <dt>NIF/NIE</dt><dd>{nif}</dd>
  <dt>Domicilio</dt><dd>{address}</dd>
  <dt>Correo electrónico</dt><dd>{email}</dd>
  <dt>Teléfono</dt><dd>{phone}</dd>
  <dt>Actividad</dt><dd>Alquiler vacacional de la vivienda {villa}, La Tejita, Granadilla de Abona, Tenerife</dd>
  <dt>Número de registro de vivienda vacacional</dt><dd>{licence} (Registro General Turístico de Canarias)</dd>
</dl>
<h3>Contenidos y fotografías</h3>
<p>Los textos, el diseño y las fotografías de la vivienda pertenecen al titular y no pueden copiarse sin autorización. Algunas fotografías de paisajes proceden de Pexels y Unsplash y se utilizan conforme a sus licencias gratuitas.</p>
<h3>Responsabilidad</h3>
<p>Mantenemos la información de esta web tan exacta y actualizada como podemos, pero los precios y la disponibilidad solo son vinculantes tras nuestra confirmación por escrito. No respondemos del contenido de las webs externas enlazadas.</p>
<h3>Reclamaciones y legislación aplicable</h3>
<p>La vivienda dispone de hojas de reclamaciones oficiales a disposición de los clientes. Esta web y todas las reservas se rigen por la legislación española; si es usted consumidor, conserva la protección de las normas imperativas de su país de residencia.</p>` },

        { id: "privacy", h: "Política de privacidad", html: `
<p>Tratamos sus datos personales conforme al Reglamento General de Protección de Datos (RGPD) y a la Ley Orgánica 3/2018 (LOPDGDD).</p>
<h3>Responsable del tratamiento</h3>
<p>{owner}, {address}, {email}.</p>
<h3>Qué datos tratamos y para qué</h3>
<ul>
  <li><strong>Solicitudes de reserva:</strong> nombre, correo, teléfono (opcional), fechas, número de huéspedes, edades de los niños, extras y su mensaje, para responder a su solicitud y, si reserva, gestionar su estancia. Base jurídica: medidas precontractuales y ejecución del contrato (art. 6.1.b RGPD).</li>
  <li><strong>Registro de viajeros:</strong> a la llegada, el Real Decreto 933/2021 nos obliga a registrar los datos de identidad de cada huésped adulto y comunicarlos a las autoridades a través de SES.Hospedajes. Base jurídica: obligación legal (art. 6.1.c RGPD).</li>
  <li><strong>Contabilidad y fiscalidad:</strong> facturas y pagos que la ley nos obliga a conservar (art. 6.1.c RGPD).</li>
  <li><strong>Funcionamiento de la web:</strong> nuestro proveedor de alojamiento registra brevemente datos técnicos, como la dirección IP, para servir la web y mantenerla segura (interés legítimo, art. 6.1.f RGPD).</li>
</ul>
<p>No utilizamos sus datos con fines publicitarios, no los vendemos y no tomamos decisiones automatizadas ni elaboramos perfiles.</p>
<h3>Destinatarios</h3>
<ul>
  <li>nuestros proveedores de correo y de alojamiento web, que tratan los datos por cuenta nuestra;</li>
  <li>el servicio de formularios que entrega las solicitudes en nuestro correo{formNote};</li>
  <li>las Fuerzas y Cuerpos de Seguridad y demás autoridades (registro de viajeros), nuestra asesoría fiscal y, cuando proceda, la Agencia Tributaria;</li>
  <li>Google, solo si pulsa «Ver mapa» (véase Cookies).</li>
</ul>
<p>El calendario de disponibilidad se sincroniza con Booking.com y Airbnb; solo se intercambian las fechas ocupadas, nunca sus datos personales.</p>
<h3>Plazo de conservación</h3>
<p>Las solicitudes que no terminan en reserva se suprimen a los 12 meses. Los datos de reservas y del registro de viajeros se conservan durante los plazos legales (registro de viajeros 3 años, documentación fiscal y contable hasta 6 años) y después se suprimen.</p>
<h3>Sus derechos</h3>
<p>Puede ejercer sus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición escribiendo a {email}. También puede presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" rel="noopener">www.aepd.es</a>).</p>` },

        { id: "cookies", h: "Cookies", html: `
<p>Esta web no utiliza cookies de análisis, publicidad ni seguimiento, y no carga rastreadores de terceros. Por eso no muestra un aviso de cookies.</p>
<p>Su navegador solo guarda en su almacenamiento local dos pequeñas preferencias: el idioma elegido y si ha ocultado las miniaturas de las fotos. No salen de su dispositivo y puede borrarlas en cualquier momento desde la configuración del navegador.</p>
<p>El mapa no se carga hasta que pulsa «Ver mapa». A partir de ese momento Google puede instalar sus propias cookies; consulte la <a href="https://policies.google.com/privacy" rel="noopener">política de privacidad de Google</a>.</p>` },

        { id: "terms", h: "Condiciones de reserva", html: `
<h3>1. Cómo se reserva</h3>
<p>El envío del formulario de esta web es una solicitud sin compromiso. Respondemos en 24 horas con la confirmación y los datos de pago. La reserva es firme una vez abonado el depósito.</p>
<h3>2. Precio</h3>
<p>Los precios son por noche para toda la vivienda, hasta {maxGuests} huéspedes. El precio que muestra la web es un cálculo orientativo; el precio final es el indicado en nuestra confirmación por escrito.</p>
<h3>3. Pago</h3>
<ul>
  <li>Depósito: {depositPercent} % del precio total al confirmar la reserva.</li>
  <li>Resto: a más tardar {balanceDays} días antes de la llegada.</li>
  <li>Formas de pago: {paymentMethods}.</li>
  <li>Fianza: {securityDeposit}, que se devuelve tras la salida si no hay daños.</li>
</ul>
<h3>4. Cancelación y cambios</h3>
<ul>
  <li>Cancelación hasta {freeCancelDays} días antes de la llegada: gratuita, devolvemos todos los pagos.</li>
  <li>Cancelación posterior o no presentación: se retiene el depósito; se devuelven los pagos que lo excedan.</li>
  <li>Los cambios de fecha son posibles según disponibilidad.</li>
</ul>
<p>Envíe las cancelaciones por correo a {email}. Recomendamos contratar un seguro de viaje.</p>
<h3>5. Llegada y salida</h3>
<p>Entrada {checkin}, salida {checkout}. Estancia mínima {minNights} noches. A la llegada cada huésped adulto debe presentar un DNI o pasaporte válido (obligación legal).</p>
<h3>6. Estancia y normas de la casa</h3>
<ul>
  <li>Máximo {maxGuests} huéspedes, niños incluidos; no se admiten personas adicionales sin nuestro consentimiento.</li>
  <li>Prohibido fumar en el interior; no se permiten fiestas ni eventos.</li>
  <li>Mascotas solo con acuerdo previo.</li>
  <li>Le rogamos cuidar la vivienda y comunicar cualquier daño; los huéspedes responden de los daños que causen.</li>
</ul>
<h3>7. Responsabilidad</h3>
<p>No respondemos de interrupciones ajenas a nuestro control (por ejemplo cortes de agua o luz, obras en el complejo, meteorología) ni de la pérdida de objetos de los huéspedes. El uso de las piscinas del complejo es bajo su propia responsabilidad y conforme a sus normas.</p>
<h3>8. Reclamaciones y legislación</h3>
<p>Si algo no está bien, avísenos enseguida para poder solucionarlo. La vivienda dispone de hojas de reclamaciones. Se aplica la legislación española, sin perjuicio de sus derechos como consumidor.</p>` }
      ]
    },

    /* ================================================================ DE */
    de: {
      title: "Rechtliche Informationen",
      updated: "Zuletzt aktualisiert",
      back: "Zurück zur Website",
      toc: "Auf dieser Seite",
      sections: [
        { id: "legal", h: "Impressum", html: `
<p>Angaben gemäß dem spanischen Gesetz 34/2002 über Dienste der Informationsgesellschaft (LSSI-CE):</p>
<dl class="facts">
  <dt>Eigentümer und Betreiber</dt><dd>{owner}</dd>
  <dt>Steuernummer (NIF/NIE)</dt><dd>{nif}</dd>
  <dt>Anschrift</dt><dd>{address}</dd>
  <dt>E-Mail</dt><dd>{email}</dd>
  <dt>Telefon</dt><dd>{phone}</dd>
  <dt>Tätigkeit</dt><dd>Ferienvermietung der Unterkunft {villa}, La Tejita, Granadilla de Abona, Teneriffa</dd>
  <dt>Lizenz für Ferienvermietung</dt><dd>{licence} (Registro General Turístico de Canarias)</dd>
</dl>
<h3>Inhalte und Fotos</h3>
<p>Texte, Gestaltung und Fotos der Unterkunft gehören dem Eigentümer und dürfen nicht ohne Erlaubnis kopiert werden. Einige Landschaftsfotos stammen von Pexels und Unsplash und werden gemäß deren kostenlosen Lizenzen verwendet.</p>
<h3>Haftung</h3>
<p>Wir halten die Angaben auf dieser Website so genau und aktuell wie möglich; Preise und Verfügbarkeit sind jedoch erst mit unserer schriftlichen Buchungsbestätigung verbindlich. Für die Inhalte verlinkter externer Websites übernehmen wir keine Haftung.</p>
<h3>Beschwerden und anwendbares Recht</h3>
<p>Offizielle Beschwerdeformulare (hojas de reclamaciones) liegen in der Unterkunft aus. Für diese Website und alle Buchungen gilt spanisches Recht; als Verbraucher behalten Sie den Schutz der zwingenden Vorschriften Ihres Wohnsitzlandes.</p>` },

        { id: "privacy", h: "Datenschutzerklärung", html: `
<p>Wir nehmen den Schutz Ihrer personenbezogenen Daten ernst und verarbeiten sie gemäß der Datenschutz-Grundverordnung (DSGVO) und dem spanischen Organgesetz 3/2018 (LOPDGDD).</p>
<h3>Verantwortlicher</h3>
<p>{owner}, {address}, {email}.</p>
<h3>Welche Daten wir verarbeiten und wozu</h3>
<ul>
  <li><strong>Buchungsanfragen:</strong> Name, E-Mail, Telefon (optional), Reisedaten, Anzahl der Gäste, Alter der Kinder, Extras und Ihre Nachricht – um Ihre Anfrage zu beantworten und bei einer Buchung Ihren Aufenthalt vorzubereiten und durchzuführen. Rechtsgrundlage: vorvertragliche Maßnahmen und Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO).</li>
  <li><strong>Gästeregistrierung:</strong> Bei der Ankunft verpflichtet uns das spanische Recht (Königliches Dekret 933/2021), die Identitätsdaten jedes erwachsenen Gastes zu erfassen und über das System SES.Hospedajes an die Polizei zu übermitteln. Rechtsgrundlage: rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO).</li>
  <li><strong>Buchhaltung und Steuern:</strong> Rechnungen und Zahlungsdaten, die wir aufbewahren müssen (Art. 6 Abs. 1 lit. c DSGVO).</li>
  <li><strong>Betrieb der Website:</strong> Unser Hosting-Anbieter speichert kurzzeitig technische Daten wie Ihre IP-Adresse, um die Website auszuliefern und abzusichern (berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO).</li>
</ul>
<p>Wir nutzen Ihre Daten nicht für Werbung, verkaufen sie nicht und treffen keine automatisierten Entscheidungen oder Profile.</p>
<h3>Empfänger</h3>
<ul>
  <li>unsere E-Mail- und Hosting-Anbieter, die Daten nur in unserem Auftrag verarbeiten;</li>
  <li>der Formulardienst, der Buchungsanfragen in unser Postfach zustellt{formNote};</li>
  <li>die spanische Polizei und Behörden (Gästeregistrierung), unser Steuerberater und, soweit erforderlich, das Finanzamt;</li>
  <li>Google, nur wenn Sie auf „Karte anzeigen“ klicken (siehe Cookies).</li>
</ul>
<p>Unser Belegungskalender wird mit Booking.com und Airbnb abgeglichen; dabei werden nur belegte Termine ausgetauscht, niemals Ihre persönlichen Daten.</p>
<h3>Speicherdauer</h3>
<p>Anfragen, aus denen keine Buchung wird, löschen wir nach 12 Monaten. Buchungs- und Registrierungsdaten bewahren wir so lange auf, wie es das Gesetz verlangt (Gästeregistrierung 3 Jahre, Steuer- und Buchhaltungsunterlagen bis zu 6 Jahre), und löschen sie danach.</p>
<h3>Ihre Rechte</h3>
<p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit sowie das Recht auf Widerspruch; schreiben Sie uns einfach an {email}. Außerdem können Sie sich bei der spanischen Datenschutzbehörde (<a href="https://www.aepd.es" rel="noopener">www.aepd.es</a>) oder der Aufsichtsbehörde in Ihrem Land beschweren.</p>` },

        { id: "cookies", h: "Cookies", html: `
<p>Diese Website verwendet keine Cookies für Statistik, Werbung oder Tracking und lädt keine Tracker von Drittanbietern. Deshalb gibt es kein Cookie-Banner.</p>
<p>Ihr Browser speichert in seinem lokalen Speicher nur zwei kleine Einstellungen: die gewählte Sprache und ob Sie die Vorschaubilder der Fotos ausgeblendet haben. Sie verlassen Ihr Gerät nie und lassen sich jederzeit in den Browsereinstellungen löschen.</p>
<p>Die Karte wird erst geladen, wenn Sie auf „Karte anzeigen“ klicken. Ab diesem Moment kann Google eigene Cookies setzen; siehe die <a href="https://policies.google.com/privacy" rel="noopener">Datenschutzerklärung von Google</a>.</p>` },

        { id: "terms", h: "Buchungsbedingungen", html: `
<h3>1. Ablauf der Buchung</h3>
<p>Das Absenden des Formulars auf dieser Website ist eine unverbindliche Anfrage. Wir antworten innerhalb von 24 Stunden mit einer Bestätigung und den Zahlungsdaten. Die Buchung wird mit Zahlung der Anzahlung verbindlich.</p>
<h3>2. Preis</h3>
<p>Die Preise gelten pro Nacht für die gesamte Unterkunft, für bis zu {maxGuests} Gäste. Der auf der Website angezeigte Preis ist eine Berechnung; maßgeblich ist der Preis in unserer schriftlichen Bestätigung.</p>
<h3>3. Zahlung</h3>
<ul>
  <li>Anzahlung: {depositPercent} % des Gesamtpreises bei Bestätigung der Buchung.</li>
  <li>Restzahlung: spätestens {balanceDays} Tage vor der Anreise.</li>
  <li>Zahlungsarten: {paymentMethods}.</li>
  <li>Kaution: {securityDeposit}, Rückerstattung nach der Abreise, sofern keine Schäden entstanden sind.</li>
</ul>
<h3>4. Stornierung und Änderungen</h3>
<ul>
  <li>Stornierung bis {freeCancelDays} Tage vor der Anreise: kostenlos, wir erstatten alle Zahlungen.</li>
  <li>Spätere Stornierung oder Nichtanreise: Die Anzahlung wird einbehalten; darüber hinausgehende Zahlungen erstatten wir.</li>
  <li>Terminänderungen sind je nach Verfügbarkeit möglich.</li>
</ul>
<p>Bitte senden Sie Stornierungen per E-Mail an {email}. Wir empfehlen eine Reiserücktrittsversicherung.</p>
<h3>5. An- und Abreise</h3>
<p>Check-in {checkin}, Check-out {checkout}. Mindestaufenthalt {minNights} Nächte. Bei der Ankunft muss jeder erwachsene Gast einen gültigen Personalausweis oder Reisepass vorlegen (gesetzliche Pflicht).</p>
<h3>6. Aufenthalt und Hausregeln</h3>
<ul>
  <li>Maximal {maxGuests} Gäste, Kinder eingeschlossen; weitere Personen nur mit unserer Zustimmung.</li>
  <li>Rauchen im Haus sowie Partys und Veranstaltungen sind nicht erlaubt.</li>
  <li>Haustiere nur nach vorheriger Absprache.</li>
  <li>Bitte behandeln Sie die Unterkunft sorgfältig und melden Sie Schäden; Gäste haften für von ihnen verursachte Schäden.</li>
</ul>
<h3>7. Haftung</h3>
<p>Wir haften nicht für Unterbrechungen außerhalb unseres Einflusses (z. B. Wasser- oder Stromausfall, Arbeiten in der Anlage, Wetter) oder für den Verlust von Gegenständen der Gäste. Die Nutzung der Pools der Anlage erfolgt auf eigene Gefahr und gemäß den Regeln der Anlage.</p>
<h3>8. Beschwerden und Recht</h3>
<p>Wenn etwas nicht stimmt, sagen Sie uns bitte sofort Bescheid, damit wir es beheben können. Beschwerdeformulare liegen in der Unterkunft aus. Es gilt spanisches Recht, unbeschadet Ihrer Rechte als Verbraucher.</p>` }
      ]
    }
  };

  /* ---------------------------------------------------------------- render */
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function values(lang) {
    const todo = `<mark class="todo">${TODO[lang] || TODO.en}</mark>`;
    const v = (x) => (x === undefined || x === null || String(x).trim() === "" ? todo : esc(x));
    const formNote = {
      en: " (only if the form is connected to such a service)",
      cs: " (jen pokud je formulář na takovou službu napojen)",
      es: " (solo si el formulario está conectado a dicho servicio)",
      de: " (nur wenn das Formular an einen solchen Dienst angebunden ist)"
    };
    return {
      owner: v(L.owner), nif: v(L.nif), address: v(L.address),
      email: L.email || CFG.email ? `<a href="mailto:${esc(L.email || CFG.email)}">${esc(L.email || CFG.email)}</a>` : todo,
      phone: v(L.phone || CFG.phone), licence: v(L.licence), villa: v(L.villaName),
      checkin: v(L.checkin), checkout: v(L.checkout),
      maxGuests: v(CFG.maxGuests), minNights: v(CFG.minNights),
      depositPercent: v(L.depositPercent), balanceDays: v(L.balanceDays),
      freeCancelDays: v(L.freeCancelDays), securityDeposit: v(L.securityDeposit),
      paymentMethods: v(L.paymentMethods && (L.paymentMethods[lang] || L.paymentMethods.en || L.paymentMethods)),
      formNote: CFG.formEndpoint ? "" : formNote[lang] || formNote.en
    };
  }

  function render() {
    const lang = TEXT[I18N.lang] ? I18N.lang : "en";
    const T = TEXT[lang], vals = values(lang);
    const fill = (html) => html.replace(/\{(\w+)\}/g, (m, k) => (k in vals ? vals[k] : m));
    document.title = `${T.title} · ${L.villaName || ""}`.replace(/ · $/, "");
    document.querySelector("[data-legal-title]").textContent = T.title;
    document.querySelector("[data-legal-back]").textContent = T.back;
    const upd = L.updated ? new Intl.DateTimeFormat(I18N.locale, { day: "numeric", month: "long", year: "numeric" }).format(new Date(L.updated + "T12:00:00")) : "";
    document.querySelector("[data-legal-updated]").textContent = upd ? `${T.updated}: ${upd}` : "";
    document.querySelector("[data-legal-toc-label]").textContent = T.toc;
    document.querySelector("[data-legal-toc]").innerHTML = T.sections.map((s) => `<li><a href="#${s.id}">${s.h}</a></li>`).join("");
    document.querySelector("[data-legal-body]").innerHTML = T.sections
      .map((s) => `<section class="legal-section" id="${s.id}"><h2>${s.h}</h2>${fill(s.html)}</section>`).join("");
    // keep the language when going back to the main page
    document.querySelector("[data-legal-back]").href = `index.html?lang=${lang}`;
    // jump to the requested section after (re)rendering
    if (location.hash) { const el = document.getElementById(location.hash.slice(1)); if (el) el.scrollIntoView(); }
  }

  render();
  I18N.onChange(render);
})();
