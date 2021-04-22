import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
} from "reactstrap";
import {
  addQuantity,
  removeFromCart,
  subQuantity,
  updateCart,
} from "../store/actions/cartActions";
import { createOrder } from "../store/actions/orderActions";
import { getSuits } from "../store/actions/suitsActions";

export class Checkout extends Component {
  componentDidMount() {
    this.props.updateCart();
  }
  render() {
    var { cart, suits } = this.props;
    var cartSuits =
      cart.length &&
      suits &&
      suits.filter((item) => {
        return cart.map((suit) => {
          return suit.id == item.id;
        });
      });
    var total =
      cartSuits &&
      cart.length &&
      cartSuits.reduce((acc, val) => {
        console.log(val.id);
        var thisQuantity =
          cart.find((cartItem) => cartItem.id == val.id) &&
          cart.find((cartItem) => {
            console.log(
              cartItem.id == val.id,
              cartItem.id,
              val.id,
              cartItem.quantity
            );
            return cartItem.id == val.id;
          }).quantity;
        if (thisQuantity) {
          return (acc = acc + val.price * thisQuantity);
        } else {
          return (acc = acc + 0);
        }
      }, 0);
    return (
      <>
        <div style={{ minHeight: "8vh" }}></div>

        <h3 className="text-center">Checkout</h3>
        <Container>
          <Card className="primary-bg-cust primary-border">
            <CardBody>
              {cart && cart.length ? (
                <>
                  <Row>
                    <Col style={{ minHeight: "60vh" }}>
                      <Form
                        className="p-2"
                        onSubmit={(e) => {
                          e.preventDefault();
                          this.props.createOrder({
                            name: e.target.name.value,
                            email: e.target.email.value,
                            phone: e.target.phone.value,
                            address: e.target.address.value,
                            city: e.target.city.value,
                            cart: cart,
                          });
                        }}
                      >
                        <Input
                          className="m-2"
                          name="name"
                          placeholder="Full Name"
                          required
                          type="text"
                        />
                        <Input
                          className="m-2"
                          type="email"
                          name="email"
                          placeholder="Email"
                        />
                        <Input
                          className="m-2"
                          type="number"
                          name="phone"
                          placeholder="Phone No."
                          required
                        />
                        <Input
                          className="m-2"
                          name="address"
                          type="text"
                          placeholder="Address"
                          required
                        />
                        <Input
                          className="m-2"
                          placeholder="City"
                          required
                          name="city"
                          type="select"
                        >
                          <option>Abbaspur (a.k)</option>
                          <option>Abbottabad</option>
                          <option>Abdul hakim</option>
                          <option>Aboha</option>
                          <option>Adda 46 chak s</option>
                          <option>Adda aujla kala</option>
                          <option>Adda pakhi more</option>
                          <option>Adda pensra</option>
                          <option>Adda phloor onl</option>
                          <option>Adda thikriwala</option>
                          <option>Adil pur</option>
                          <option>Aghar jamalpur</option>
                          <option>Agwana</option>
                          <option>Ahmad nagar</option>
                          <option>Ahmad pur east</option>
                          <option>Ahmad pur sial</option>
                          <option>Akal garh (a.k)</option>
                          <option>Akora khattaq</option>
                          <option>Akri</option>
                          <option>Ali pur syedan</option>
                          <option>Ali zai kurram</option>
                          <option>Alipur</option>
                          <option>Alipur chattha</option>
                          <option>Alipur sayyadan</option>
                          <option>Aman dara</option>
                          <option>Ambor area</option>
                          <option>Ambriala chowk</option>
                          <option>Amin abad</option>
                          <option>Amir pur mangan</option>
                          <option>Anoi srohta(a.k</option>
                          <option>Arifabad</option>
                          <option>Arifwala</option>
                          <option>Arija</option>
                          <option>Astore</option>
                          <option>Attar shisha</option>
                          <option>Attock</option>
                          <option>Attock khurd</option>
                          <option>Attowala</option>
                          <option>Awagut</option>
                          <option>Awan abad(bathi</option>
                          <option>Awaran</option>
                          <option>Aziz abad (a.k.</option>
                          <option>Aziz chak</option>
                          <option>Babri banda</option>
                          <option>Bacha band</option>
                          <option>Badah</option>
                          <option>Badin</option>
                          <option>Badomalhi</option>
                          <option>Badshahpur</option>
                          <option>Baggan</option>
                          <option>Bagh (a.k.)</option>
                          <option>Bagnoter</option>
                          <option>Bahawalnagar</option>
                          <option>Bahawalpur</option>
                          <option>Bahuwal</option>
                          <option>Bala garhi</option>
                          <option>Balakot</option>
                          <option>Balokhel city</option>
                          <option>Bangla yateem w</option>
                          <option>Bannu</option>
                          <option>Barikot</option>
                          <option>Barkhan</option>
                          <option>Barnala (a.k)</option>
                          <option>Basser pur</option>
                          <option>Basti fuja</option>
                          <option>Batgram</option>
                          <option>Bathrui (a.k)</option>
                          <option>Batkhela</option>
                          <option>Bazargai</option>
                          <option>Beesham</option>
                          <option>Behal</option>
                          <option>Bela</option>
                          <option>Bewal</option>
                          <option>Bhabrra</option>
                          <option>Bhagatanwala</option>
                          <option>Bhagowal kalan</option>
                          <option>Bhagwal</option>
                          <option>Bhai pheru</option>
                          <option>Bhakkar</option>
                          <option>Bhall</option>
                          <option>Bhalwal</option>
                          <option>Bhan saeed abad</option>
                          <option>Bhara khu</option>
                          <option>Bhaun</option>
                          <option>Bhera</option>
                          <option>Bhikari kalan</option>
                          <option>Bhiki sharif</option>
                          <option>Bhiko more</option>
                          <option>Bhimber a. k</option>
                          <option>Bhit shah</option>
                          <option>Bhone</option>
                          <option>Bhopalwala</option>
                          <option>Bhowanj</option>
                          <option>Bhring (a.k)</option>
                          <option>Bhubbar</option>
                          <option>Bhudial</option>
                          <option>Bhurban pearl c</option>
                          <option>Bidder marjan</option>
                          <option>Bloouch (a.k.)</option>
                          <option>Boken more</option>
                          <option>Bonga hayat</option>
                          <option>Brotha</option>
                          <option>Brund batha(a.k</option>
                          <option>Bucheri</option>
                          <option>Bunn behk (a.k)</option>
                          <option>Bunner</option>
                          <option>Burewala</option>
                          <option>Burg attari</option>
                          <option>Cadet coll. low</option>
                          <option>Cadet coll. sun</option>
                          <option>Cadet college l</option>
                          <option>Cadet college(k</option>
                          <option>Chak</option>
                          <option>Chak 168/10r</option>
                          <option>Chak abdullah</option>
                          <option>Chak baqar shah</option>
                          <option>Chak bazaar(a.k</option>
                          <option>Chak beli khan</option>
                          <option>Chak jamal</option>
                          <option>Chak jhumra</option>
                          <option>Chak kamal(sehn</option>
                          <option>Chak pirana</option>
                          <option>Chak swari(a.k)</option>
                          <option>Chakar kot koha</option>
                          <option>Chakdara</option>
                          <option>Chaklala</option>
                          <option>Chakothi (a.k.)</option>
                          <option>Chakwal</option>
                          <option>Chaman</option>
                          <option>Chamankot (a.k)</option>
                          <option>Chambi</option>
                          <option>Chanan gakkhar</option>
                          <option>Changa manga</option>
                          <option>Char bagh (swat</option>
                          <option>Charsadda</option>
                          <option>Chashma</option>
                          <option>Chashma colny.</option>
                          <option>Chashma(wapda-a</option>
                          <option>Chattar area</option>
                          <option>Chawinda</option>
                          <option>Chechian (a.k.)</option>
                          <option>Chella bandi (a</option>
                          <option>Chenab nagar</option>
                          <option>Chicha watni</option>
                          <option>Chilas</option>
                          <option>Chiniot</option>
                          <option>Chistian</option>
                          <option>Chitral</option>
                          <option>Chittar pari</option>
                          <option>Choa saidan sha</option>
                          <option>Chohar jamali</option>
                          <option>Chomko</option>
                          <option>Chorai (a.k)</option>
                          <option>Choti</option>
                          <option>Chottagla (a.k)</option>
                          <option>Chowk munda</option>
                          <option>Chowk sarwar sh</option>
                          <option>Chowki (a.k)</option>
                          <option>Chund</option>
                          <option>Chung</option>
                          <option>Dad laghari</option>
                          <option>Dadu</option>
                          <option>Dadyal (a.k)</option>
                          <option>Dahewal</option>
                          <option>Daira din panna</option>
                          <option>Dalwal</option>
                          <option>Dammas (a.k)</option>
                          <option>Danda shah bila</option>
                          <option>Dandli (a.k)</option>
                          <option>Dandot</option>
                          <option>Dar-ul-islam co</option>
                          <option>Dara adam khel</option>
                          <option>Darbar(hajiabad</option>
                          <option>Darbello</option>
                          <option>Dargai</option>
                          <option>Darrora</option>
                          <option>Darrosh</option>
                          <option>Darya khan mari</option>
                          <option>Daska</option>
                          <option>Datote (a.k.)</option>
                          <option>Daudkhel</option>
                          <option>Daul tala</option>
                          <option>Daulat pur</option>
                          <option>Daulatpur safan</option>
                          <option>Daur</option>
                          <option>Deena</option>
                          <option>Depalpur</option>
                          <option>Dera ala yar</option>
                          <option>Dera bakha</option>
                          <option>Dera ghazi khan</option>
                          <option>Dera ismail khan</option>
                          <option>Dera malla sin</option>
                          <option>Dera murad jama</option>
                          <option>Dewan sharif (a</option>
                          <option>Dhabeji</option>
                          <option>Dhadar</option>
                          <option>Dhall ghair</option>
                          <option>Dhander (kalan)</option>
                          <option>Dhangri bala (a</option>
                          <option>Dhani bombian</option>
                          <option>Dhanot</option>
                          <option>Dharanwala</option>
                          <option>Dharki</option>
                          <option>Dheri julagram</option>
                          <option>Dhoda</option>
                          <option>Dhok daura (a.k</option>
                          <option>Dhoke badial</option>
                          <option>Dhoke maken</option>
                          <option>Dhoria</option>
                          <option>Dhudial</option>
                          <option>Dhunni</option>
                          <option>Dhurkana</option>
                          <option>Dhurnal</option>
                          <option>Digri</option>
                          <option>Dijkot</option>
                          <option>Dinga</option>
                          <option>Dir</option>
                          <option>Dokota</option>
                          <option>Dokri</option>
                          <option>Dolta</option>
                          <option>Domail</option>
                          <option>Dongi (a.k)</option>
                          <option>Dorey</option>
                          <option>Dorey wala</option>
                          <option>Dulewala</option>
                          <option>Dunya pur</option>
                          <option>Easakhel</option>
                          <option>Eidgah road</option>
                          <option>Eiser (a.k)</option>
                          <option>Elahabad</option>
                          <option>Faisalabad</option>
                          <option>Faizpur khurd</option>
                          <option>Faqir wali</option>
                          <option>Faqirabad</option>
                          <option>Farooqa</option>
                          <option>Farooqabad</option>
                          <option>Fateh jang</option>
                          <option>Fatehpur</option>
                          <option>Fatehpur (chak</option>
                          <option>Fazilpur dhundh</option>
                          <option>Feroz watwan</option>
                          <option>Ferozwala</option>
                          <option>Fort abbas</option>
                          <option>G maharaja</option>
                          <option>G.s.sugar mills</option>
                          <option>Gadoon amazai</option>
                          <option>Gaggo mandi</option>
                          <option>Gakkhar mandi</option>
                          <option>Gala knatha</option>
                          <option>Gambat</option>
                          <option>Garh more</option>
                          <option>Garhi dopatta</option>
                          <option>Garhi doulat za</option>
                          <option>Garhi habib ull</option>
                          <option>Garhi khero</option>
                          <option>Garhi yasin</option>
                          <option>Garih khairo</option>
                          <option>Gawadar</option>
                          <option>Ghari khero</option>
                          <option>Gharibwal cemen</option>
                          <option>Gharo</option>
                          <option>Ghazi</option>
                          <option>Ghaziabad</option>
                          <option>Ghazikot townsh</option>
                          <option>Ghotki</option>
                          <option>Ghous pur</option>
                          <option>Ghuenke</option>
                          <option>Ghulam ishaq un</option>
                          <option>Ghuman wala</option>
                          <option>Gidani</option>
                          <option>Gilgit</option>
                          <option>Glotian morr</option>
                          <option>Gogera</option>
                          <option>Goharabad</option>
                          <option>Goi</option>
                          <option>Gojra</option>
                          <option>Gojra ( mandi b</option>
                          <option>Golarchi</option>
                          <option>Gomal universit</option>
                          <option>Gondal</option>
                          <option>Gopal pur</option>
                          <option>Goth machi</option>
                          <option>Groat shehar/ca</option>
                          <option>Guddu barrage</option>
                          <option>Gujar garhi</option>
                          <option>Gujar khan</option>
                          <option>Gujarpur</option>
                          <option>Gujranwala</option>
                          <option>Gujranwala cant</option>
                          <option>Gujrat</option>
                          <option>Gulabad</option>
                          <option>Gulan khel</option>
                          <option>Gulpur (a.k)</option>
                          <option>Gumbat</option>
                          <option>Gumbat mera</option>
                          <option>Habibabad</option>
                          <option>Habibullah colo</option>
                          <option>Hafizabad</option>
                          <option>Haji abad</option>
                          <option>Hajiabad (a.k)</option>
                          <option>Hajiabad ichria</option>
                          <option>Hajira (a.k.)</option>
                          <option>Hajiwala</option>
                          <option>Hala</option>
                          <option>Halani</option>
                          <option>Hamid</option>
                          <option>Hamid pur (a.k)</option>
                          <option>Hangu</option>
                          <option>Harappa station</option>
                          <option>Hari chand</option>
                          <option>Hari ghel</option>
                          <option>Hariah railway</option>
                          <option>Haripur</option>
                          <option>Hariyawala</option>
                          <option>Harnai</option>
                          <option>Harnal</option>
                          <option>Harno</option>
                          <option>Haroonabad</option>
                          <option>Haseeb waqas mi</option>
                          <option>Hasilpur</option>
                          <option>Hassan abdal</option>
                          <option>Hati</option>
                          <option>Hattar ind. est</option>
                          <option>Hattian</option>
                          <option>Havelian</option>
                          <option>Haya serai</option>
                          <option>Hayatabad</option>
                          <option>Hazoor pur</option>
                          <option>Hazro</option>
                          <option>Head baloki roa</option>
                          <option>Head works(btk)</option>
                          <option>Hera (chak 134</option>
                          <option>Hingorno</option>
                          <option>Holar (a.k)</option>
                          <option>Hub chowki</option>
                          <option>Hujra shah muke</option>
                          <option>Hyder abad thal</option>
                          <option>Hyderabad</option>
                          <option>Ikhlas (dist. a</option>
                          <option>Islam garh(a.k)</option>
                          <option>Islam pura jabb</option>
                          <option>Islamabad</option>
                          <option>Islamkot</option>
                          <option>J camp</option>
                          <option>Jacobabad</option>
                          <option>Jaffarabad</option>
                          <option>Jahania</option>
                          <option>Jaiserwala</option>
                          <option>Jalabad (a.k.)</option>
                          <option>Jalal pur bhatt</option>
                          <option>Jalal pur jattan</option>
                          <option>Jalala</option>
                          <option>Jalalpur pirwal</option>
                          <option>Jalalpur sharif</option>
                          <option>Jamal din wali</option>
                          <option>Jamal gari</option>
                          <option>Jamal pur</option>
                          <option>Jaman shah(surs</option>
                          <option>Jampur</option>
                          <option>Jamshoro</option>
                          <option>Jand</option>
                          <option>Jand nagar</option>
                          <option>Jaranwala</option>
                          <option>Jarwar</option>
                          <option>Jatlan (a.k.)</option>
                          <option>Jauhrabad</option>
                          <option>Jaunpur</option>
                          <option>Jehangira</option>
                          <option>Jhajra east</option>
                          <option>Jhajra west</option>
                          <option>Jhampeer</option>
                          <option>Jhang</option>
                          <option>Jharian</option>
                          <option>Jhawariya</option>
                          <option>Jhelum</option>
                          <option>Jheteke</option>
                          <option>Jholanara (a.k)</option>
                          <option>Jhudo</option>
                          <option>Jhugian</option>
                          <option>Jibbran mandi</option>
                          <option>Jinnahabad</option>
                          <option>Jiwani</option>
                          <option>Johi</option>
                          <option>Jor (bunner)</option>
                          <option>Juglot</option>
                          <option>Juna (a.k)</option>
                          <option>Jundathi (a.k)</option>
                          <option>Kabir wala</option>
                          <option>Kadhala (a.k)</option>
                          <option>Kahna nao</option>
                          <option>Kahror pakka</option>
                          <option>Kahuta</option>
                          <option>Kakool ( pma)</option>
                          <option>Kala bagh</option>
                          <option>Kala bagh (p.a.</option>
                          <option>Kala shah kaku</option>
                          <option>Kalabat</option>
                          <option>Kalah</option>
                          <option>Kalar kahar</option>
                          <option>Kalary more(a.k</option>
                          <option>Kalaswala</option>
                          <option>Kalat</option>
                          <option>Kalhoro</option>
                          <option>Kallar saydian</option>
                          <option>Kalor kot</option>
                          <option>Kamalia</option>
                          <option>Kamber ali khan</option>
                          <option>Kamoki</option>
                          <option>Kamra</option>
                          <option>Kamrotty (a.k)</option>
                          <option>Kandal sayan</option>
                          <option>Kandhkot</option>
                          <option>Kandiaro</option>
                          <option>Kanganpur</option>
                          <option>Kangra</option>
                          <option>Kanyal</option>
                          <option>Kanyal (a.k)</option>
                          <option>Karachi</option>
                          <option>Karam pur</option>
                          <option>Karianwala</option>
                          <option>Karimabad(hunza</option>
                          <option>Kark</option>
                          <option>Karkra town(a.k</option>
                          <option>Karmabad</option>
                          <option>Karoondi</option>
                          <option>Karor lal easan</option>
                          <option>Kashmoor</option>
                          <option>Kasur</option>
                          <option>Katlang</option>
                          <option>Kattha sughral</option>
                          <option>Kerala majhan</option>
                          <option>Keryala</option>
                          <option>Khaal</option>
                          <option>Khabeki</option>
                          <option>Khad gujran(a.k</option>
                          <option>Khadro</option>
                          <option>Khaigala (a.k.)</option>
                          <option>Khair pur meeru</option>
                          <option>Khairabad</option>
                          <option>Khairpur</option>
                          <option>Khairpur nathan</option>
                          <option>Khairpur tamian</option>
                          <option>Khaiw wali</option>
                          <option>Khalabat sector</option>
                          <option>Khaliq abad(a.k</option>
                          <option>Khan bela</option>
                          <option>Khan gah dogran</option>
                          <option>Khan ka sharif</option>
                          <option>Khan pur distt.</option>
                          <option>Khanabad (a.k)</option>
                          <option>Khanewal</option>
                          <option>Khangarh</option>
                          <option>Khanpur</option>
                          <option>Khanpur meher</option>
                          <option>Khanpur shomali</option>
                          <option>Khar (bajore ag</option>
                          <option>Khar (batkhela)</option>
                          <option>Kharan</option>
                          <option>Kharian</option>
                          <option>Kharick</option>
                          <option>Khat kali</option>
                          <option>Khawaja textile</option>
                          <option>Khewra</option>
                          <option>Khidar wala</option>
                          <option>Khipro</option>
                          <option>Khore</option>
                          <option>Khorra</option>
                          <option>Khoski</option>
                          <option>Khota</option>
                          <option>Khuratta (a.k)</option>
                          <option>Khurrianwala</option>
                          <option>Khushab</option>
                          <option>Khuzdar</option>
                          <option>Kohat</option>
                          <option>Kohat industria</option>
                          <option>Kohat(cement fa</option>
                          <option>Kohri (a.k.)</option>
                          <option>Kot abdul malik</option>
                          <option>Kot addu</option>
                          <option>Kot chandnan</option>
                          <option>Kot deji</option>
                          <option>Kot digee</option>
                          <option>Kot ghulam mohd</option>
                          <option>Kot islam</option>
                          <option>Kot jamel (a.k)</option>
                          <option>Kot je sing</option>
                          <option>Kot mithan</option>
                          <option>Kot momin</option>
                          <option>Kot najeeb ulla</option>
                          <option>Kot radha kisha</option>
                          <option>Kot sujan sing</option>
                          <option>Kot sultan(bhai</option>
                          <option>Kota</option>
                          <option>Kotla arab ali</option>
                          <option>Kotli (a. k)</option>
                          <option>Kotli loharan</option>
                          <option>Kotri</option>
                          <option>Koulo tarrar</option>
                          <option>Kufri</option>
                          <option>Kundian</option>
                          <option>Kunri</option>
                          <option>Kuthiala sheikh</option>
                          <option>Lachi</option>
                          <option>Ladhana</option>
                          <option>Lahore</option>
                          <option>Laidher</option>
                          <option>Lakhi ghulam sh</option>
                          <option>Lakki marwat</option>
                          <option>Lala zar(chak 1</option>
                          <option>Lalamusa</option>
                          <option>Lallian</option>
                          <option>Lalpir (therma</option>
                          <option>Lalu rawank</option>
                          <option>Larkana</option>
                          <option>Lasbela</option>
                          <option>Lawrence colleg</option>
                          <option>Lawrencepur</option>
                          <option>Layyah</option>
                          <option>Liaqatabad(a.k)</option>
                          <option>Liaqatabad(pipl</option>
                          <option>Liaqatpur</option>
                          <option>Lodhran</option>
                          <option>Loothar</option>
                          <option>Loralai</option>
                          <option>Lower topa</option>
                          <option>Luddan</option>
                          <option>Mach</option>
                          <option>Machikey(factor</option>
                          <option>Machiwal</option>
                          <option>Madina market</option>
                          <option>Maghal</option>
                          <option>Mailsi</option>
                          <option>Maira matoor</option>
                          <option>Makadoompur pok</option>
                          <option>Makli</option>
                          <option>Malakand</option>
                          <option>Malakwal</option>
                          <option>Malan mansoor</option>
                          <option>Malhoona more</option>
                          <option>Malik pura</option>
                          <option>Malikwal</option>
                          <option>Malowal</option>
                          <option>Mamon kanjan</option>
                          <option>Manawala</option>
                          <option>Mandi bahauddin</option>
                          <option>Mandi dhaba sin</option>
                          <option>Mandi faiz abad</option>
                          <option>Mandi heera sin</option>
                          <option>Mandi sadiq gun</option>
                          <option>Mandi safdar ab</option>
                          <option>Mandi shah juin</option>
                          <option>Mandi usmanwala</option>
                          <option>Mandian</option>
                          <option>Mandra</option>
                          <option>Mandranwala</option>
                          <option>Manduri kurram</option>
                          <option>Manga mandi</option>
                          <option>Mangla dam</option>
                          <option>Mangla hamlet (a.k.)</option>
                          <option>Mangla industri</option>
                          <option>Mansehra</option>
                          <option>Manshera camp</option>
                          <option>Mardan</option>
                          <option>Mardwal</option>
                          <option>Margaz</option>
                          <option>Mashkay</option>
                          <option>Mastung</option>
                          <option>Matiyari</option>
                          <option>Matli</option>
                          <option>Matta (swat)</option>
                          <option>Mayar</option>
                          <option>Mehar</option>
                          <option>Mehmoodkot</option>
                          <option>Mehrabpur</option>
                          <option>Mian channu</option>
                          <option>Mian m.sugar mi</option>
                          <option>Miani</option>
                          <option>Mianwali</option>
                          <option>Minchin abad</option>
                          <option>Mingora (swat)</option>
                          <option>Mir pur baghal</option>
                          <option>Mir pur sakro</option>
                          <option>Miran shah</option>
                          <option>Mirokhan</option>
                          <option>Mirpur (a. k)</option>
                          <option>Mirpur khas</option>
                          <option>Mirpur mathelo</option>
                          <option>Mirupr bathoro</option>
                          <option>Mitha tiwana</option>
                          <option>Mithi</option>
                          <option>Mithiani</option>
                          <option>Mitranwali</option>
                          <option>Mitro</option>
                          <option>Mohar sharif</option>
                          <option>Mohara gulsher</option>
                          <option>Mohinudin pur</option>
                          <option>Mohlanwal</option>
                          <option>Mohmmadpur diwa</option>
                          <option>Mohra noori</option>
                          <option>Mohuta mohra</option>
                          <option>Mona depot</option>
                          <option>Mong (a.k.)</option>
                          <option>Morgah</option>
                          <option>Moro</option>
                          <option>Mouch</option>
                          <option>Mubarak pur</option>
                          <option>Mujahid abad (a</option>
                          <option>Mulhal mughalan</option>
                          <option>Multan</option>
                          <option>Murali wala</option>
                          <option>Murid</option>
                          <option>Murid wala</option>
                          <option>Muridke</option>
                          <option>Murree</option>
                          <option>Musa</option>
                          <option>Muslim bagh</option>
                          <option>Muslimabad</option>
                          <option>Muzaffarabad(ak)</option>
                          <option>Muzaffargarh</option>
                          <option>Nakiyal (a.k)</option>
                          <option>Nakkah bazar(a.</option>
                          <option>Nankana sahib</option>
                          <option>Nar (a.k.)</option>
                          <option>Narang mandi</option>
                          <option>Narian sharif</option>
                          <option>Narowal</option>
                          <option>Naseera</option>
                          <option>Naseerabad</option>
                          <option>Naudero</option>
                          <option>Nawab shah</option>
                          <option>Nawan jandanwal</option>
                          <option>Nawan sher</option>
                          <option>Nehang</option>
                          <option>New afzalpur(ak</option>
                          <option>New jatoi</option>
                          <option>New mohalla</option>
                          <option>Newdarband town</option>
                          <option>Nomanpura</option>
                          <option>Noonawali</option>
                          <option>Noor shah</option>
                          <option>Nooriabad</option>
                          <option>Noorpur noranga</option>
                          <option>Noorpur thal</option>
                          <option>Nowshera</option>
                          <option>Nowshera dt. kh</option>
                          <option>Nowshera virkan</option>
                          <option>Nowshero feroz</option>
                          <option>Nrtc(telecom st</option>
                          <option>Nushki</option>
                          <option>Okara</option>
                          <option>Olympia chemica</option>
                          <option>Oremara town</option>
                          <option>Oughi</option>
                          <option>P.o.f. (factory</option>
                          <option>Pacca chang</option>
                          <option>Padrar</option>
                          <option>Pahrianwali add</option>
                          <option>Paigah</option>
                          <option>Pakhwal</option>
                          <option>Pakka khuh</option>
                          <option>Pakpattan</option>
                          <option>Panag gali (a.k</option>
                          <option>Pandi sabarwal</option>
                          <option>Pandore</option>
                          <option>Pang kasi</option>
                          <option>Panian</option>
                          <option>Panjeera (a.k.)</option>
                          <option>Panjgour</option>
                          <option>Pano aqil</option>
                          <option>Panyam (a.k)</option>
                          <option>Panyiola (a.k.)</option>
                          <option>Par nowshera</option>
                          <option>Parachinar</option>
                          <option>Parova</option>
                          <option>Pasrur</option>
                          <option>Pattika (a.k.)</option>
                          <option>Pattoki</option>
                          <option>Pcfl -hpfl</option>
                          <option>Perial</option>
                          <option>Peshawar</option>
                          <option>Phaki shah mard</option>
                          <option>Phalia</option>
                          <option>Phulji station</option>
                          <option>Phullarwan</option>
                          <option>Pind dadan khan</option>
                          <option>Pind hashim kha</option>
                          <option>Pind kalan(a.k)</option>
                          <option>Pind khurd(a.k)</option>
                          <option>Pindi bhattian</option>
                          <option>Pindi gheb</option>
                          <option>Pindi gujran</option>
                          <option>Pioneer cement</option>
                          <option>Pir jagi(chak 1</option>
                          <option>Pir jo goth</option>
                          <option>Pirmahal</option>
                          <option>Pishin</option>
                          <option>Pithoro</option>
                          <option>Plak (a.k)</option>
                          <option>Potha (a.k.)</option>
                          <option>Pourmiana</option>
                          <option>Public school(a</option>
                          <option>Pulendri (a.k)</option>
                          <option>Pull 111 chak</option>
                          <option>Pull bager</option>
                          <option>Pull manda (a.k</option>
                          <option>Pull no. 12 mel</option>
                          <option>Punjab sugar mi</option>
                          <option>Purab klair</option>
                          <option>Puran</option>
                          <option>Qaboola sharif</option>
                          <option>Qadirabad</option>
                          <option>Qadirpur rawan</option>
                          <option>Qaidabad</option>
                          <option>Qalandarabad</option>
                          <option>Qasba grt. chak</option>
                          <option>Qazi ahmad</option>
                          <option>Qila dedar sing</option>
                          <option>Qila kallarwala</option>
                          <option>Qila saifullah</option>
                          <option>Qillan (a.k.)</option>
                          <option>Quetta</option>
                          <option>Rabwa</option>
                          <option>Radhan</option>
                          <option>Radhen</option>
                          <option>Rahim yar khan</option>
                          <option>Rahwali</option>
                          <option>Raiwind</option>
                          <option>Raja sadokey</option>
                          <option>Rajana</option>
                          <option>Rajanpur</option>
                          <option>Rajar</option>
                          <option>Rakhni</option>
                          <option>Rangla (a.k.)</option>
                          <option>Rango</option>
                          <option>Rani pur</option>
                          <option>Ranjhi</option>
                          <option>Rashakai</option>
                          <option>Rasool pur tarr</option>
                          <option>Ratodero</option>
                          <option>Rawalakot (a.k)</option>
                          <option>Rawalpindi</option>
                          <option>Rawat</option>
                          <option>Rehmani nagar</option>
                          <option>Rehmatabad</option>
                          <option>Renalakhurd</option>
                          <option>Right bank colo</option>
                          <option>Risal pur</option>
                          <option>Rohri</option>
                          <option>Roodo sultan</option>
                          <option>Saboor sharif</option>
                          <option>Sacote</option>
                          <option>Sadiqabad</option>
                          <option>Saeedabad</option>
                          <option>Safdarabad</option>
                          <option>Sagri</option>
                          <option>Sahib abad</option>
                          <option>Sahiwal</option>
                          <option>Sahiwal (nawan</option>
                          <option>Saidu sharif (s</option>
                          <option>Sakrand</option>
                          <option>Saloi</option>
                          <option>Samaro</option>
                          <option>Sambrial</option>
                          <option>Samror (a.k.)</option>
                          <option>Samundri</option>
                          <option>Sanawan</option>
                          <option>Sandhianwali</option>
                          <option>Sandu gali</option>
                          <option>Sanghar</option>
                          <option>Sanghi</option>
                          <option>Sangla hill</option>
                          <option>Sara-e- karishan</option>
                          <option>Sarai alamgir</option>
                          <option>Sarai chowk</option>
                          <option>Sarai naurang</option>
                          <option>Sarai naymat kh</option>
                          <option>Saranda (a.k)</option>
                          <option>Sardarpur</option>
                          <option>Sardheri</option>
                          <option>Sargodha</option>
                          <option>Sarkalan</option>
                          <option>Saro zai</option>
                          <option>Saroki</option>
                          <option>Sarran (a.k.)</option>
                          <option>Sarsawa (a.k.)</option>
                          <option>Sarwala</option>
                          <option>Satiyana</option>
                          <option>Sattrah</option>
                          <option>Sehar mandi(a.k</option>
                          <option>Seher bagla</option>
                          <option>Sehnsa (a.k.)</option>
                          <option>Sehwan</option>
                          <option>Shabqadar</option>
                          <option>Shadadpur</option>
                          <option>Shadun lund</option>
                          <option>Shah bagh</option>
                          <option>Shah dher</option>
                          <option>Shah pur chakar</option>
                          <option>Shahdadkot</option>
                          <option>Shahdara</option>
                          <option>Shahkot</option>
                          <option>Shahpur city</option>
                          <option>Shahpur saddar</option>
                          <option>Shakar garh</option>
                          <option>Shamkot</option>
                          <option>Shankiari</option>
                          <option>Sharaqpur shari</option>
                          <option>Sheikhupura</option>
                          <option>Sher khanie</option>
                          <option>Sher shah</option>
                          <option>Shewa adda</option>
                          <option>Shikarpur</option>
                          <option>Shimla hill</option>
                          <option>Shinka</option>
                          <option>Shorkot cantt.</option>
                          <option>Shorkot city</option>
                          <option>Shoukat lines</option>
                          <option>Shujabad</option>
                          <option>Sial sharif</option>
                          <option>Sialkot</option>
                          <option>Sibbi</option>
                          <option>Sillanwali</option>
                          <option>Singola (a.k.)</option>
                          <option>Sirgudhan</option>
                          <option>Sita road(rehma</option>
                          <option>Skardu</option>
                          <option>Smahni (a.k)</option>
                          <option>Small ind estat</option>
                          <option>Sobho dero</option>
                          <option>Sohawa</option>
                          <option>Sohawa (city on</option>
                          <option>Sohawa dewalian</option>
                          <option>Srohta (a.k.)</option>
                          <option>Sui</option>
                          <option>Sujawal</option>
                          <option>Sukkur</option>
                          <option>Sultan kot</option>
                          <option>Supply (a.k.)</option>
                          <option>Swabi</option>
                          <option>Syed wala</option>
                          <option>T-tip colony</option>
                          <option>Takht-e-bhai</option>
                          <option>Takya kawan(a.k</option>
                          <option>Talagang</option>
                          <option>Talhar</option>
                          <option>Talian (a.k.)</option>
                          <option>Talvandi</option>
                          <option>Tamirgaraha</option>
                          <option>Tand koi</option>
                          <option>Tanda</option>
                          <option>Tandlianwala</option>
                          <option>Tando adam</option>
                          <option>Tando ala yar</option>
                          <option>Tando bago</option>
                          <option>Tando ghulam al</option>
                          <option>Tando jam</option>
                          <option>Tando jan mohd.</option>
                          <option>Tando mohd.khan</option>
                          <option>Tangdew (a.k)</option>
                          <option>Tangi gala (a.</option>
                          <option>Tank</option>
                          <option>Tappi</option>
                          <option>Tarbela dam</option>
                          <option>Tariq abad (a.k</option>
                          <option>Tarnab farm(agr</option>
                          <option>Tarnol</option>
                          <option>Tata pani (a.k)</option>
                          <option>Tatral</option>
                          <option>Taunsa sharif</option>
                          <option>Taxila</option>
                          <option>Tehi</option>
                          <option>Thaingi</option>
                          <option>Thall</option>
                          <option>Thanil fatoi</option>
                          <option>Tharparker</option>
                          <option>Tharu shah</option>
                          <option>Thatha</option>
                          <option>Thatta (sadiqab</option>
                          <option>Theeng more(all</option>
                          <option>Thehri</option>
                          <option>Theri mir wah</option>
                          <option>Thoa maharam kh</option>
                          <option>Thorar (a.k.)</option>
                          <option>Thotha rai baha</option>
                          <option>Thull</option>
                          <option>Tibba sultan pu</option>
                          <option>Toba tek sing</option>
                          <option>Topa (a.k.)</option>
                          <option>Topi</option>
                          <option>Tranda mohd. pa</option>
                          <option>Trarkhail (a.k)</option>
                          <option>Trutta (a.k)</option>
                          <option>Tulamba</option>
                          <option>Turbat</option>
                          <option>Uch sharif</option>
                          <option>Umar zai</option>
                          <option>Umer kot</option>
                          <option>Usta muhammad</option>
                          <option>Uthal</option>
                          <option>Vanky tarer</option>
                          <option>Vegowal</option>
                          <option>Vehalizer</option>
                          <option>Vehari</option>
                          <option>Venktarar</option>
                          <option>Vespa factory</option>
                          <option>Wadhi</option>
                          <option>Waggon</option>
                          <option>Wah cantt</option>
                          <option>Wahhndo</option>
                          <option>Waisa</option>
                          <option>Wanjari</option>
                          <option>Warah</option>
                          <option>Wasu</option>
                          <option>Wazirabad</option>
                          <option>Winder</option>
                          <option>Yazman mandi</option>
                          <option>Yousaf sugar mi</option>
                          <option>Zafarwal</option>
                          <option>Zahir peer</option>
                          <option>Ziabad</option>
                        </Input>
                        <p className="text-danger">
                          **All Orders Can Be Replaced or Canceled within 14
                          days after delivery (Return Policy)
                          <br />
                          **Delivery can take 4 to 10 days
                          <br /> **Damaged or Used Products will not be Replaced
                          or Refunded
                        </p>
                        <Row>
                          <Col className="text-right p-0">
                            <button
                              className="mt-3 card-btn checkout-btn"
                              size="sm"
                            >
                              Place Order&nbsp;
                              <i class="fas fa-clipboard-check"></i>
                            </button>
                          </Col>
                        </Row>
                      </Form>
                    </Col>
                    <Col className="pl-2 pr-2">
                      <div
                        className="primary-border"
                        style={{
                          maxHeight: "60vh",
                          overflowY: "auto",
                          overflowX: "hidden",
                        }}
                      >
                        {cart.map((item) => {
                          var thisSuit =
                            suits && suits.find((suit) => suit.id == item.id);
                          if (thisSuit)
                            return (
                              <Card className="primary-bg-cust primary-cust-text">
                                <CardBody>
                                  <Row>
                                    <Col xs={{ size: 4 }}>
                                      <img
                                        width="100%"
                                        height="150px"
                                        src={thisSuit.images[0]}
                                      />
                                    </Col>
                                    <Col xs={{ size: 8 }}>
                                      <p>
                                        <b>{thisSuit.name}</b>
                                      </p>
                                      <p>Rs.&nbsp;{thisSuit.price}</p>
                                      <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                          <Input
                                            size="sm"
                                            type="button"
                                            value="-"
                                            disabled={item.quantity <= 1}
                                            onClick={(e) => {
                                              e.preventDefault();
                                              this.props.subQuantity(item.id);
                                            }}
                                            className="primary-bg-cust primary-cust-text"
                                          />
                                        </InputGroupAddon>
                                        <Input
                                          size="sm"
                                          type="number"
                                          readOnly
                                          value={item.quantity}
                                          className="secondary-bg-cust primary-cust-text"
                                        />
                                        <InputGroupAddon
                                          addonType="append"
                                          value={1}
                                        >
                                          <Input
                                            size="sm"
                                            type="button"
                                            value="+"
                                            disabled={
                                              item.quantity >= thisSuit.stock
                                            }
                                            className="primary-bg-cust primary-cust-text"
                                            onClick={(e) => {
                                              e.preventDefault();
                                              this.props.addQuantity(item.id);
                                            }}
                                          />
                                        </InputGroupAddon>
                                      </InputGroup>
                                      <div className="text-right">
                                        <button
                                          className="mt-3 card-btn cart-btn"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            this.props.removeFromCart({
                                              id: item.id,
                                            });
                                          }}
                                          size="sm"
                                        >
                                          Remove{" "}
                                          <i class="fas fa-minus-circle"></i>
                                        </button>
                                      </div>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                            );
                          else return null;
                        })}
                      </div>
                      <hr className=" primary-border" />
                      <Row>
                        <Col>
                          <h5>Total :</h5>
                        </Col>
                        <Col className="text-right">
                          <h5> Rs.{total}</h5>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </>
              ) : (
                <>
                  <h3>
                    You have nothing in your cart. Add products to cart and
                    proceed to order!
                  </h3>
                  <Row>
                    <Col xs={{ size: 2, offset: 5 }}>
                      <Link to="/">
                        <button className="mt-3 card-btn checkout-btn">
                          Go Back
                        </button>
                      </Link>
                    </Col>
                  </Row>
                </>
              )}
            </CardBody>
          </Card>
        </Container>
      </>
    );
  }
}

export function mapStateToProps(state) {
  return {
    uid: state.auth.uid,
    loading: state.auth.requested,
    registered: state.auth.registered,
    suits: state.suits.suits,
    cart: state.cart.cart,
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    getSuits: () => dispatch(getSuits()),
    removeFromCart: (cartItem) => dispatch(removeFromCart(cartItem)),
    addQuantity: (cartItem) => dispatch(addQuantity(cartItem)),
    subQuantity: (cartItem) => dispatch(subQuantity(cartItem)),
    createOrder: (order) => dispatch(createOrder(order)),
    updateCart: () => dispatch(updateCart()),
    // login: (credentials) => dispatch(login(credentials)),
    // register: (credentials, password) =>
    // dispatch(register(credentials, password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
