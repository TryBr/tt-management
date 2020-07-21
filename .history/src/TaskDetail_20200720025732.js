import React, { Component, Fragment } from 'react';

import { Layout, Progress, PageHeader, Select, Row, Col , 
        Steps, Comment, Avatar, Form, Button, List, Input, Table} from 'antd';
    
const { Option } = Select;
const { Step } = Steps;

const CommentList = ({ comments }) => (
    <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
    />
);

const Editor = ({ onSubmit, submitting, value }) => (
    <>
    <Form.Item>
        <Input value={value} />
    </Form.Item>
    <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Добавить комментарий
        </Button>
    </Form.Item>
    </>
);

const BackIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 3.49994C9.77614 3.2238 10.2239 3.2238 10.5 3.49994C10.7761 3.77608 10.7761 4.2238 10.5 4.49994L7 7.99994L10.5 11.4999C10.7761 11.7761 10.7761 12.2238 10.5 12.4999C10.2239 12.7761 9.77614 12.7761 9.5 12.4999L5 7.99994L9.5 3.49994Z" fill="#272F5A"/>
    </svg>
);

const TimeIcon = () => (
    <svg className="time-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 1H10V2H8.5V3.02054C11.5798 3.27461 14 5.85467 14 9C14 12.3137 11.3137 15 8 15C4.68629 15 2 12.3137 2 9C2 5.85467 4.42023 3.27461 7.5 3.02054V2H6V1ZM13 9C13 11.7614 10.7614 14 8 14C5.23858 14 3 11.7614 3 9C3 6.23858 5.23858 4 8 4C10.7614 4 13 6.23858 13 9ZM7.5 5V9V9.23419L7.67991 9.38411L10.3598 11.7682L11 11L8.5 8.76581V5H7.5Z" fill="#272F5A" fill-opacity="0.6"/>
    </svg>
);

const SelectSuffixIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.49994 6.5C3.2238 6.22386 3.2238 5.77614 3.49994 5.5C3.77608 5.22386 4.2238 5.22386 4.49994 5.5L7.99994 9L11.4999 5.5C11.7761 5.22386 12.2238 5.22386 12.4999 5.5C12.7761 5.77614 12.7761 6.22386 12.4999 6.5L7.99994 11L3.49994 6.5Z" fill="#272F5A"/>
    </svg>
);

const StepFinishIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.1751 1.61284L6.00001 15H7L5.33334 9.16667L7 10V9H9V10L11 11V9H13V11H15V9H13V7H15V5H13V4L11 3V5H9V3H7V5H5.00001V3H3.57143L3.09963 1.34869C3.04066 1.1423 2.85202 1 2.63737 1C2.31796 1 2.08735 1.30572 2.1751 1.61284ZM4.14286 5H5.00001V7H4.71429L4.14286 5ZM5.00001 8V7H7V9H5.28572L5.00001 8ZM9 7H7V5H9V7ZM11 7V9H9V7H11ZM11 7V5H13V7H11Z" fill="#272F5A" fill-opacity="0.6"/>
    </svg>
);

const UserAvatar = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 4.5C4 3.11929 5.11929 2 6.5 2H11.5C11.7761 2 12 2.22386 12 2.5V3.5C12 4.32843 11.3284 5 10.5 5H9H6.5C5.11929 5 4 6.11929 4 7.5V4.5ZM4 8.91465C3.4174 8.70873 3 8.15311 3 7.5V4.5C3 2.567 4.567 1 6.5 1H11.5C12.3284 1 13 1.67157 13 2.5V3.5V7.5C13 8.15311 12.5826 8.70873 12 8.91465V9C12 11.2091 10.2091 13 8 13C5.79086 13 4 11.2091 4 9V8.91465ZM11.5 8C11.7761 8 12 7.77614 12 7.5V5.50018C11.5822 5.81403 11.0628 6 10.5 6H9H6.5C5.67157 6 5 6.67157 5 7.5V9C5 10.6569 6.34315 12 8 12C9.65685 12 11 10.6569 11 9V8H11.5ZM4.83222 13.227C4.6682 13.3402 4.43436 13.4317 4.15043 13.5326C3.98241 13.5923 3.80841 13.6816 3.68019 13.8217C3.54003 13.9748 3.42904 14.2311 3.54372 14.5109C3.63977 14.7451 3.8442 14.8609 3.98562 14.9152C4.14163 14.9751 4.31882 15 4.49936 15H4.50353H4.5077H4.51188H4.51606H4.52025H4.52445H4.52865H4.53286H4.53707H4.54129H4.54551H4.54974H4.55398H4.55822H4.56247H4.56672H4.57098H4.57524H4.57951H4.58379H4.58807H4.59236H4.59665H4.60095H4.60525H4.60956H4.61387H4.61819H4.62252H4.62685H4.63118H4.63552H4.63987H4.64422H4.64858H4.65294H4.65731H4.66168H4.66606H4.67044H4.67483H4.67922H4.68362H4.68803H4.69244H4.69685H4.70127H4.70569H4.71012H4.71456H4.719H4.72344H4.72789H4.73234H4.7368H4.74127H4.74574H4.75021H4.75469H4.75917H4.76366H4.76816H4.77266H4.77716H4.78167H4.78618H4.7907H4.79522H4.79975H4.80428H4.80881H4.81335H4.8179H4.82245H4.827H4.83156H4.83613H4.84069H4.84527H4.84984H4.85443H4.85901H4.8636H4.8682H4.8728H4.8774H4.88201H4.88662H4.89124H4.89586H4.90048H4.90511H4.90975H4.91439H4.91903H4.92368H4.92833H4.93298H4.93764H4.9423H4.94697H4.95164H4.95632H4.961H4.96568H4.97037H4.97506H4.97976H4.98445H4.98916H4.99387H4.99858H5.00329H5.00801H5.01273H5.01746H5.02219H5.02693H5.03166H5.03641H5.04115H5.0459H5.05065H5.05541H5.06017H5.06493H5.0697H5.07447H5.07925H5.08403H5.08881H5.0936H5.09838H5.10318H5.10797H5.11277H5.11758H5.12238H5.12719H5.132H5.13682H5.14164H5.14647H5.15129H5.15612H5.16095H5.16579H5.17063H5.17547H5.18032H5.18517H5.19002H5.19488H5.19974H5.2046H5.20946H5.21433H5.2192H5.22408H5.22896H5.23384H5.23872H5.2436H5.24849H5.25339H5.25828H5.26318H5.26808H5.27298H5.27789H5.2828H 5.28771H5.29263H5.29755H5.30247H5.30739H5.31232H5.31724H5.32218H5.32711H5.33205H5.33699H5.34193H5.34687H5.35182H5.35677H5.36172H5.36668H5.37163H5.37659H5.38156H5.38652H5.39149H5.39646H5.40143H5.4064H5.41138H5.41636H5.42134H5.42632H5.43131H5.4363H5.44129H5.44628H5.45127H5.45627H5.46127H5.46627H5.47127H5.47628H5.48129H5.4863H5.49131H5.49632H5.50134H5.50636H5.51138H5.5164H5.52142H5.52645H5.53148H5.5365H5.54154H5.54657H5.5516H5.55664H5.56168H5.56672H5.57176H5.57681H5.58185H5.5869H5.59195H5.597H5.60205H5.60711H5.61216H5.61722H5.62228H5.62734H5.6324H5.63746H5.64253H5.6476H5.65266H5.65773H5.6628H5.66788H5.67295H5.67803H5.6831H5.68818H5.69326H5.69834H5.70342H5.7085H5.71359H5.71867H5.72376H5.72885H5.73394H5.73903H5.74412H5.74921H5.75431H5.7594H5.7645H5.76959H5.77469H5.77979H5.78489H5.78999H5.79509H5.8002H5.8053H5.81041H5.81551H5.82062H5.82572H5.83083H5.83594H5.84105H5.84616H5.85127H5.85639H5.8615H5.86661H5.87173H5.87684H5.88196H5.88707H5.89219H5.89731H5.90242H5.90754H5.91266H5.91778H5.9229H5.92802H5.93314H5.93827H5.94339H5.94851H5.95363H5.95876H5.96388H5.969H5.97413H5.97925H5.98438H5.9895H5.99463H5.99975H6.00488H6.01H6.01513H6.02026H6.02538H6.03051H6.03564H6.04076H6.04589H6.05102H6.05614H6.06127H6.0664H6.07152H6.07665H6.08178H6.0869H6.09203H6.09716H6.10228H6.10741H6.11254H6.11766H6.12279H6.12791H6.13304H6.13816H6.14329H6.14841H6.15354H6.15866H6.16378H6.16891H6.17403H6.17915H6.18427H6.18939H6.19451H6.19963H6.20475H6.20987H6.21499H6.22011H6.22523H6.23035H6.23546H6.24058H6.24569H6.25081H6.25592H6.26103H6.26615H6.27126H6.27637H6.28148H6.28659H6.2917H6.29681H6.30191H6.30702H6.31212H6.31723H6.32233H6.32743H6.33254H6.33764H6.34274H6.34783H6.35293H6.35803H6.36312H6.36822H6.37331H6.3784H6.38349H6.38858H6.39367H6.39876H6.40385H6.40893H6.41401H6.4191H6.42418H6.42926H6.43434H6.43941H6.44449H6.44956H6.45464H6.45971H6.46478H6.46985H6.47492H6.47998H6.48504H6.49011H6.49517H6.50023H6.50529H6.51034H6.5154H6.52045H6.5255H6.53055H6.5356H6.54065H6.54569H6.55074H6.55578H6.56082H6.56586H6.57089H6.57592H6.58096H6.58599H6.59102H6.59604H6.60107H6.60609H6.61111H6.61613H6.62115H6.62616H6.63117H6.63619H6.64119H6.6462H6.6512H6.65621H6.66121H6.66621H6.6712H6.67619H6.68119H6.68618H6.69116H6.69615H6.70113H6.70611H6.71109H6.71606H6.72104H6.72601H6.73097H6.73594H6.7409H6.74586H6.75082H6.75578H6.76073H6.76568H6.77063H6.77558H6.78052H6.78546H6.7904H6.79534H6.80027H6.8052H6.81013H6.81505H6.81997H6.82489H6.82981H6.83472H6.83963H6.84454H6.84945H6.85435H6.85925H6.86414H6.86904H6.87393H6.87882H6.8837H6.88858H6.89346H6.89834H6.90321H6.90808H6.91295H6.91781H6.92267H6.92753H6.93238H6.93723H6.94208H6.94693H6.95177H6.95661H6.96144H6.96627H6.9711H6.97593H6.98075H6.98557H6.99038H6.99519H7H7.00323H7.00644H7.00965H7.01283H7.01601H7.01917H7.02232H7.02545H7.02857H7.03168H7.03477H7.03785H7.04092H7.04397H7.04701H7.05004H7.05306H7.05606H7.05905H7.06202H7.06499H7.06794H7.07087H7.0738H7.07671H7.07961H7.0825H7.08537H7.08824H7.09109H7.09393H7.09675H7.09956H7.10237H7.10516H7.10793H7.1107H7.11345H7.11619H7.11892H7.12164H7.12435H7.12704H7.12973H7.1324H7.13506H7.13771H7.14034H7.14297H7.14558H7.14819H7.15078H7.15336H7.15593H7.15849H7.16104H7.16357H7.1661H7.16861H7.17112H7.17361H7.17609H7.17857H7.18103H7.18348H7.18592H7.18835H7.19077H7.19318H7.19558H7.19797H7.20035H7.20271H7.20507H7.20742H7.20976H7.21209H7.21441H7.21672H7.21902H7.22131H7.22359H7.22586H7.22812H7.23037H7.23261H7.23484H7.23707H7.23928H7.24149H7.24368H7.24587H7.24804H7.25021H7.25237H7.25452H7.25666H7.2588H7.26092H7.26304H7.26514H7.26724H7.26933H7.27141H7.27348H7.27555H7.2776H7.27965H7.28169H7.28372H7.28574H7.28776H7.28976H7.29176H7.29375H7.29574H7.29771H7.29968H7.30164H7.30359H7.30553H7.30747H7.3094H7.31132H7.31323H7.31514H7.31704H7.31893H7.32082H7.3227H7.32457H7.32643H7.32829H7.33014H7.33198H7.33381H7.33564H7.33747H7.33928H7.34109H7.34289H7.34469H7.34648H7.34826H7.35004H7.35181H7.35357H7.35533H7.35708H7.35882H7.36056H7.3623H7.36402H7.36575H7.36746H7.36917H7.37087H7.37257H7.37426H7.37595H7.37763H7.37931H7.38098H7.38264H7.3843H7.38596H7.38761H7.38925H7.39089H7.39252H7.39415H7.39577H7.39739H7.39901H7.40061H7.40222H7.40382H7.40541H7.407H7.40859H7.41017H7.41175H7.41332H7.41488H7.41645H7.41801H7.41956H7.42111H7.42266H7.4242H7.42574H7.42727H7.4288H7.43033H7.43185H7.43337H7.43489H7.4364H7.43791H7.43941H7.44091H7.44241H7.44391H7.4454H7.44688H7.44837H7.44985H7.45133H7.4528H7.45428H7.45574H7.45721H7.45867H7.46013H7.46159H7.46305H7.4645H7.46595H7.4674H7.46884H7.47028H7.47172H7.47316H7.47459H7.47603H7.47746H7.47889H7.48031H7.48174H7.48316H7.48458H7.486H7.48741H7.48883H7.49024H7.49165H7.49306H7.49447H7.49588H7.49728H7.49869H7.50009H7.50149H7.50289H7.50429H7.50569H7.50708H7.50848H7.50987H7.51126H7.51266H7.51405H7.51544H7.51683H7.51822H7.51961H7.52099H7.52238H7.52377H7.52516H7.52654H7.52793H7.52931H7.5307H7.53208H7.53347H7.53485H7.53624H7.53762H7.53901H7.54039H7.54178H7.54316H7.54455H7.54593H7.54732H7.54871H7.5501H7.55148H7.55287H7.55426H7.55565H7.55704H7.55843H7.55982H7.56122H7.56261H7.56401H7.5654H7.5668H7.5682H7.5696H7.571H7.5724H7.5738H7.57521H7.57662H7.57802H7.57943H7.58084H7.58226H7.58367H7.58509H7.58651H7.58793H7.58935H7.59077H7.5922H7.59363H7.59506H7.59649H7.59792H7.59936H7.6008H7.60224H7.60369H7.60513H7.60658H7.60803H7.60949H7.61095H7.61241H7.61387H7.61533H7.6168H7.61828H7.61975H7.62123H7.62271H7.62419H7.62568H7.62717H7.62866H7.63016H7.63166H7.63317H7.63467H7.63618H7.6377H7.63922H7.64074H7.64227H7.6438H7.64533H7.64687H7.64841H7.64996H7.65151H7.65306H7.65462H7.65618H7.65775H7.65932H7.66089H7.66248H7.66406H7.66565H7.66724H7.66884H7.67044H7.67205H7.67367H7.67528H7.67691H7.67853H7.68017H7.6818H7.68345H7.6851H7.68675H7.68841H7.69007H7.69174H7.69342H7.6951H7.69678H7.69847H7.70017H7.70188H7.70358H7.7053H7.70702H7.70875H7.71048H7.71222H7.71396H7.71571H7.71747H7.71923H7.721H7.72278H7.72456H7.72635H7.72814H7.72994H7.73175H7.73356H7.73539H7.73721H7.73905H7.74089H7.74274H7.74459H7.74646H7.74833H7.7502H7.75209H7.75398H7.75588H7.75778H7.7597H7.76162H7.76354H7.76548H7.76742H7.76937H7.77133H7.7733H7.77527H7.77725H7.77924H7.78124H7.78325H7.78526H7.78728H7.78931H7.79135H7.79339H7.79545H7.79751H7.79958H7.80166H7.80375H7.80585H7.80795H7.81007H7.81219H7.81432H7.81646H7.81861H7.82077H7.82294H7.82511H7.8273H7.82949H7.83169H7.83391H7.83613H7.83836H7.8406H7.84285H7.84511H7.84738H7.84966H7.85195H7.85424H7.85655H7.85887H7.8612H7.86353H7.86588H7.86824H7.87061H7.87298H7.87537H7.87777H7.88018H7.8826H7.88502H7.88746H7.88991H7.89237H7.89484H7.89733H7.89982H7.90232H7.90483H7.90736H7.90989H7.91244H7.915H7.91756H7.92014H7.92273H7.92534H7.92795H7.93057H7.93321H7.93586H7.93851H7.94118H7.94387H7.94656H7.94926H7.95198H7.95471H7.95745H7.9602H7.96296H7.96574H7.96853H7.97133H7.97414H7.97696H7.9798H7.98265H7.98551H7.98838H7.99127H7.99417H7.99708H8H8.00292H8.00583H8.00873H8.01162H8.01449H8.01735H8.0202H8.02304H8.02586H8.02867H8.03147H8.03426H8.03704H8.0398H8.04255H8.04529H8.04802H8.05074H8.05344H8.05613H8.05882H8.06149H8.06414H8.06679H8.06943H8.07205H8.07466H8.07727H8.07986H8.08244H8.085H8.08756H8.09011H8.09264H8.09517H8.09768H8.10018H8.10267H8.10516H8.10763H8.11009H8.11254H8.11498H8.1174H8.11982H8.12223H8.12463H8.12702H8.12939H8.13176H8.13412H8.13647H8.1388H8.14113H8.14345H8.14576H8.14805H8.15034H8.15262H8.15489H8.15715H8.1594H8.16164H8.16387H8.16609H8.16831H8.17051H8.1727H8.17489H8.17706H8.17923H8.18139H8.18354H8.18568H8.18781H8.18993H8.19205H8.19415H8.19625H8.19834H8.20042H8.20249H8.20455H8.20661H8.20865H8.21069H8.21272H8.21474H8.21675H8.21876H8.22076H8.22275H8.22473H8.2267H8.22867H8.23063H8.23258H8.23452H8.23646H8.23838H8.2403H8.24222H8.24412H8.24602H8.24791H8.2498H8.25167H8.25354H8.25541H8.25726H8.25911H8.26095H8.26279H8.26461H8.26644H8.26825H8.27006H8.27186H8.27365H8.27544H8.27722H8.279H8.28077H8.28253H8.28429H8.28604H8.28778H8.28952H8.29125H8.29298H8.2947H8.29642H8.29812H8.29983H8.30153H8.30322H8.3049H8.30658H8.30826H8.30993H8.31159H8.31325H8.3149H8.31655H8.3182H8.31983H8.32147H8.32309H8.32472H8.32633H8.32795H8.32956H8.33116H8.33276H8.33435H8.33594H8.33752H8.33911H8.34068H8.34225H8.34382H8.34538H8.34694H8.34849H8.35004H8.35159H8.35313H8.35467H8.3562H8.35773H8.35926H8.36078H8.3623H8.36382H8.36533H8.36683H8.36834H8.36984H8.37134H8.37283H8.37432H8.37581H8.37729H8.37877H8.38025H8.38172H8.3832H8.38467H8.38613H8.38759H8.38905H8.39051H8.39197H8.39342H8.39487H8.39631H8.39776H8.3992H8.40064H8.40208H8.40351H8.40494H8.40637H8.4078H8.40923H8.41065H8.41207H8.41349H8.41491H8.41633H8.41774H8.41916H8.42057H8.42198H8.42338H8.42479H8.4262H8.4276H8.429H8.4304H8.4318H8.4332H8.4346H8.43599H8.43739H8.43878H8.44018H8.44157H8.44296H8.44435H8.44574H8.44713H8.44852H8.4499H8.45129H8.45268H8.45407H8.45545H8.45684H8.45822H8.45961H8.46099H8.46238H8.46376H8.46515H8.46653H8.46792H8.4693H8.47069H8.47207H8.47346H8.47484H8.47623H8.47762H8.47901H8.48039H8.48178H8.48317H8.48456H8.48595H8.48734H8.48874H8.49013H8.49152H8.49292H8.49431H8.49571H8.49711H8.49851H8.49991H8.50131H8.50272H8.50412H8.50553H8.50694H8.50835H8.50976H8.51117H8.51259H8.514H8.51542H8.51684H8.51826H8.51969H8.52111H8.52254H8.52397H8.52541H8.52684H8.52828H8.52972H8.53116H8.5326H8.53405H8.5355H8.53695H8.53841H8.53987H8.54133H8.54279H8.54426H8.54572H8.5472H8.54867H8.55015H8.55163H8.55312H8.5546H8.55609H8.55759H8.55909H8.56059H8.56209H8.5636H8.56511H8.56663H8.56815H8.56967H8.5712H8.57273H8.57426H8.5758H8.57734H8.57889H8.58044H8.58199H8.58355H8.58512H8.58668H8.58825H8.58983H8.59141H8.593H8.59459H8.59618H8.59778H8.59939H8.60099H8.60261H8.60423H8.60585H8.60748H8.60911H8.61075H8.61239H8.61404H8.6157H8.61736H8.61902H8.62069H8.62237H8.62405H8.62574H8.62743H8.62913H8.63083H8.63254H8.63425H8.63598H8.6377H8.63944H8.64118H8.64292H8.64467H8.64643H8.64819H8.64996H8.65174H8.65352H8.65531H8.65711H8.65891H8.66072H8.66253H8.66436H8.66619H8.66802H8.66986H8.67171H8.67357H8.67543H8.6773H8.67918H8.68107H8.68296H8.68486H8.68677H8.68868H8.6906H8.69253H8.69447H8.69641H8.69836H8.70032H8.70229H8.70426H8.70625H8.70824H8.71024H8.71224H8.71426H8.71628H8.71831H8.72035H8.7224H8.72445H8.72652H8.72859H8.73067H8.73276H8.73486H8.73696H8.73908H8.7412H8.74334H8.74548H8.74763H8.74979H8.75196H8.75413H8.75632H8.75851H8.76072H8.76293H8.76516H8.76739H8.76963H8.77188H8.77414H8.77641H8.77869H8.78098H8.78328H8.78559H8.78791H8.79024H8.79258H8.79493H8.79729H8.79965H8.80203H8.80442H8.80682H8.80923H8.81165H8.81408H8.81652H8.81897H8.82143H8.82391H8.82639H8.82888H8.83139H8.8339H8.83643H8.83896H8.84151H8.84407H8.84664H8.84922H8.85181H8.85442H8.85703H8.85966H8.86229H8.86494H8.8676H8.87027H8.87296H8.87565H8.87836H8.88108H8.88381H8.88655H8.8893H8.89207H8.89484H8.89763H8.90044H8.90325H8.90607H8.90891H8.91176H8.91463H8.9175H8.92039H8.92329H8.9262H8.92913H8.93206H8.93501H8.93798H8.94095H8.94394H8.94694H8.94996H8.95299H8.95603H8.95908H8.96215H8.96523H8.96832H8.97143H8.97455H8.97768H8.98083H8.98399H8.98717H8.99035H8.99356H8.99677H9H9.00481H9.00962H9.01443H9.01925H9.02407H9.0289H9.03373H9.03856H9.04339H9.04823H9.05307H9.05792H9.06277H9.06762H9.07247H9.07733H9.08219H9.08705H9.09192H9.09679H9.10166H9.10654H9.11142H9.1163H9.12118H9.12607H9.13096H9.13586H9.14075H9.14565H9.15055H9.15546H9.16037H9.16528H9.17019H9.17511H9.18003H9.18495H9.18987H9.1948H9.19973H9.20466H9.2096H9.21454H9.21948H9.22442H9.22937H9.23432H9.23927H9.24422H9.24918H9.25414H9.2591H9.26406H9.26903H9.27399H9.27896H9.28394H9.28891H9.29389H9.29887H9.30385H9.30884H9.31382H9.31881H9.32381H9.3288H9.33379H9.33879H9.34379H9.3488H9.3538H9.35881H9.36381H9.36883H9.37384H9.37885H9.38387H9.38889H9.39391H9.39893H9.40396H9.40898H9.41401H9.41904H9.42408H9.42911H9.43414H9.43918H9.44422H9.44926H9.45431H9.45935H9.4644H9.46945H9.4745H9.47955H9.4846H9.48966H9.49471H9.49977H9.50483H9.50989H9.51496H9.52002H9.52508H9.53015H9.53522H9.54029H9.54536H9.55044H9.55551H9.56059H9.56566H9.57074H9.57582H9.5809H9.58599H9.59107H9.59615H9.60124H9.60633H9.61142H9.61651H9.6216H9.62669H9.63178H9.63688H9.64197H9.64707H9.65217H9.65726H9.66236H9.66746H9.67257H9.67767H9.68277H9.68788H9.69298H9.69809H9.70319H9.7083H9.71341H9.71852H9.72363H9.72874H9.73385H9.73897H9.74408H9.74919H9.75431H9.75942H9.76454H9.76965H9.77477H9.77989H9.78501H9.79013H9.79525H9.80037H9.80549H9.81061H9.81573H9.82085H9.82597H9.83109H9.83622H9.84134H9.84646H9.85159H9.85671H9.86184H9.86696H9.87209H9.87721H9.88234H9.88746H9.89259H9.89772H9.90284H9.90797H9.9131H9.91822H9.92335H9.92848H9.9336H9.93873H9.94386H9.94898H9.95411H9.95924H9.96436H9.96949H9.97462H9.97974H9.98487H9.99H9.99512H10.0002H10.0054H10.0105H10.0156H10.0207H10.0259H10.031H10.0361H10.0412H10.0464H10.0515H10.0566H10.0617H10.0669H10.072H10.0771H10.0822H10.0873H10.0925H10.0976H10.1027H10.1078H10.1129H10.118H10.1232H10.1283H10.1334H10.1385H10.1436H10.1487H10.1538H10.1589H10.1641H10.1692H10.1743H10.1794H10.1845H10.1896H10.1947H10.1998H10.2049H10.21H10.2151H10.2202H10.2253H10.2304H10.2355H10.2406H10.2457H10.2508H10.2559H10.261H10.2661H10.2712H10.2762H10.2813H10.2864H10.2915H10.2966H10.3017H10.3067H10.3118H10.3169H10.322H10.3271H10.3321H10.3372H10.3423H10.3473H10.3524H10.3575H10.3625H10.3676H10.3727H10.3777H10.3828H10.3878H10.3929H10.3979H10.403H10.4081H10.4131H10.4181H10.4232H10.4282H10.4333H10.4383H10.4434H10.4484H10.4534H10.4585H10.4635H10.4685H10.4736H10.4786H10.4836H10.4886H10.4936H10.4987H10.5037H10.5087H10.5137H10.5187H10.5237H10.5287H10.5337H10.5387H10.5437H10.5487H10.5537H10.5587H10.5637H10.5687H10.5737H10.5787H10.5836H10.5886H10.5936H10.5986H10.6035H10.6085H10.6135H10.6184H10.6234H10.6284H10.6333H10.6383H10.6432H10.6482H10.6531H10.6581H10.663H10.668H10.6729H10.6778H10.6828H10.6877H10.6926H10.6975H10.7025H10.7074H10.7123H10.7172H10.7221H10.727H10.7319H10.7368H10.7417H10.7466H10.7515H10.7564H10.7613H10.7662H10.771H10.7759H10.7808H10.7857H10.7905H10.7954H10.8003H10.8051H10.81H10.8148H10.8197H10.8245H10.8294H10.8342H10.839H10.8439H10.8487H10.8535H10.8584H10.8632H10.868H10.8728H10.8776H10.8824H10.8872H10.892H10.8968H10.9016H10.9064H10.9112H10.916H10.9208H10.9255H10.9303H10.9351H10.9398H10.9446H10.9493H10.9541H10.9588H10.9636H10.9683H10.9731H10.9778H10.9825H10.9873H10.992H10.9967H11.0014H11.0061H11.0108H11.0155H11.0202H11.0249H11.0296H11.0343H11.039H11.0437H11.0484H11.053H11.0577H11.0624H11.067H11.0717H11.0763H11.081H11.0856H11.0903H11.0949H11.0995H11.1041H11.1088H11.1134H11.118H11.1226H11.1272H11.1318H11.1364H11.141H11.1456H11.1502H11.1547H11.1593H11.1639H11.1684H11.173H11.1776H11.1821H11.1866H11.1912H11.1957H11.2003H11.2048H11.2093H11.2138H11.2183H11.2228H11.2273H11.2318H11.2363H11.2408H11.2453H11.2498H11.2543H11.2587H11.2632H11.2677H11.2721H11.2766H11.281H11.2854H11.2899H11.2943H11.2987H11.3032H11.3076H11.312H11.3164H11.3208H11.3252H11.3296H11.3339H11.3383H11.3427H11.3471H11.3514H11.3558H11.3601H11.3645H11.3688H11.3732H11.3775H11.3818H11.3861H11.3904H11.3948H11.3991H11.4034H11.4076H11.4119H11.4162H11.4205H11.4248H11.429H11.4333H11.4375H11.4418H11.446H11.4503H11.4545H11.4587H11.4629H11.4671H11.4713H11.4756H11.4797H11.4839H11.4881H11.4923H11.4965H11.5006C11.6812 15 11.8584 14.9751 12.0144 14.9152C12.1558 14.8609 12.3602 14.7451 12.4563 14.5109C12.571 14.2311 12.46 13.9748 12.3198 13.8217C12.1916 13.6816 12.0176 13.5923 11.8496 13.5326C11.5656 13.4317 11.3318 13.3402 11.1678 13.227C11.0171 13.123 11 13.0551 11 13H10C10 13.4672 10.2539 13.7892 10.5307 14H10.5287H10.5237H10.5187H10.5137H10.5087H10.5037H10.4987H10.4936H10.4886H10.4836H10.4786H10.4736H10.4685H10.4635H10.4585H10.4534H10.4484H10.4434H10.4383H10.4333H10.4282H10.4232H10.4181H10.4131H10.4081H10.403H10.3979H10.3929H10.3878H10.3828H10.3777H10.3727H10.3676H10.3625H10.3575H10.3524H10.3473H10.3423H10.3372H10.3321H10.3271H10.322H10.3169H10.3118H10.3067H10.3017H10.2966H10.2915H10.2864H10.2813H10.2762H10.2712H10.2661H10.261H10.2559H10.2508H10.2457H10.2406H10.2355H10.2304H10.2253H10.2202H10.2151H10.21H10.2049H10.1998H10.1947H10.1896H10.1845H10.1794H10.1743H10.1692H10.1641H10.1589H10.1538H10.1487H10.1436H10.1385H10.1334H10.1283H10.1232H10.118H10.1129H10.1078H10.1027H10.0976H10.0925H10.0873H10.0822H10.0771H10.072H10.0669H10.0617H10.0566H10.0515H10.0464H10.0412H10.0361H10.031H10.0259H10.0207H10.0156H10.0105H10.0054H10.0002H9.99512H9.99H9.98487H9.97974H9.97462H9.96949H9.96436H9.95924H9.95411H9.94898H9.94386H9.93873H9.9336H9.92848H9.92335H9.91822H9.9131H9.90797H9.90284H9.89772H9.89259H9.88746H9.88234H9.87721H9.87209H9.86696H9.86184H9.85671H9.85159H9.84646H9.84134H9.83622H9.83109H9.82597H9.82085H9.81573H9.81061H9.80549H9.80037H9.79525H9.79013H9.78501H9.77989H9.77477H9.76965H9.76454H9.75942H9.75431H9.74919H9.74408H9.73897H9.73385H9.72874H9.72363H9.71852H9.71341H9.7083H9.70319H9.69809H9.69298H9.68788H9.68277H9.67767H9.67257H9.66746H9.66236H9.65726H9.65217H9.64707H9.64197H9.63688H9.63178H9.62669H9.6216H9.61651H9.61142H9.60633H9.60124H9.59615H9.59107H9.58599H9.5809H9.57582H9.57074H9.56566H9.56059H9.55551H9.55044H9.54536H9.54029H9.53522H9.53015H9.52508H9.52002H9.51496H9.50989H9.50483H9.49977H9.49471H9.48966H9.4846H9.47955H9.4745H9.46945H9.4644H9.45935H9.45431H9.44926H9.44422H9.43918H9.43414H9.42911H9.42408H9.41904H9.41401H9.40898H9.40396H9.39893H9.39391H9.38889H9.38387H9.37885H9.37384H9.36883H9.36381H9.35881H9.3538H9.3488H9.34379H9.33879H9.33379H9.3288H9.32381H9.31881H9.31382H9.30884H9.30385H9.29887H9.29389H9.28891H9.28394H9.27896H9.27399H9.26903H9.26406H9.2591H9.25414H9.24918H9.24422H9.23927H9.23432H9.22937H9.22442H9.21948H9.21454H9.2096H9.20466H9.19973H9.1948H9.18987H9.18495H9.18003H9.17511H9.17019H9.16528H9.16037H9.15546H9.15055H9.14565H9.14075H9.13586H9.13096H9.12607H9.12118H9.1163H9.11142H9.10654H9.10166H9.09679H9.09192H9.08705H9.08219H9.07733H9.07247H9.06762H9.06277H9.05792H9.05307H9.04823H9.04339H9.03856H9.03373H9.0289H9.02407H9.01925H9.01443H9.00962H9.00481H9H8.99677H8.99356H8.99035H8.98717H8.98399H8.98083H8.97768H8.97455H8.97143H8.96832H8.96523H8.96215H8.95908H8.95603H8.95299H8.94996H8.94694H8.94394H8.94095H8.93798H8.93501H8.93206H8.92913H8.9262H8.92329H8.92039H8.9175H8.91463H8.91176H8.90891H8.90607H8.90325H8.90044H8.89763H8.89484H8.89207H8.8893H8.88655H8.88381H8.88108H8.87836H8.87565H8.87296H8.87027H8.8676H8.86494H8.86229H8.85966H8.85703H8.85442H8.85181H8.84922H8.84664H8.84407H8.84151H8.83896H8.83643H8.8339H8.83139H8.82888H8.82639H8.82391H8.82143H8.81897H8.81652H8.81408H8.81165H8.80923H8.80682H8.80442H8.80203H8.79965H8.79729H8.79493H8.79258H8.79024H8.78791H8.78559H8.78328H8.78098H8.77869H8.77641H8.77414H8.77188H8.76963H8.76739H8.76516H8.76293H8.76072H8.75851H8.75632H8.75413H8.75196H8.74979H8.74763H8.74548H8.74334H8.7412H8.73908H8.73696H8.73486H8.73276H8.73067H8.72859H8.72652H8.72445H8.7224H8.72035H8.71831H8.71628H8.71426H8.71224H8.71024H8.70824H8.70625H8.70426H8.70229H8.70032H8.69836H8.69641H8.69447H8.69253H8.6906H8.68868H8.68677H8.68486H8.68296H8.68107H8.67918H8.6773H8.67543H8.67357H8.67171H8.66986H8.66802H8.66619H8.66436H8.66253H8.66072H8.65891H8.65711H8.65531H8.65352H8.65174H8.64996H8.64819H8.64643H8.64467H8.64292H8.64118H8.63944H8.6377H8.63598H8.63425H8.63254H8.63083H8.62913H8.62743H8.62574H8.62405H8.62237H8.62069H8.61902H8.61736H8.6157H8.61404H8.61239H8.61075H8.60911H8.60748H8.60585H8.60423H8.60261H8.60099H8.59939H8.59778H8.59618H8.59459H8.593H8.59141H8.58983H8.58825H8.58668H8.58512H8.58355H8.58199H8.58044H8.57889H8.57734H8.5758H8.57426H8.57273H8.5712H8.56967H8.56815H8.56663H8.56511H8.5636H8.56209H8.56059H8.55909H8.55759H8.55609H8.5546H8.55312H8.55163H8.55015H8.54867H8.5472H8.54572H8.54426H8.54279H8.54133H8.53987H8.53841H8.53695H8.5355H8.53405H8.5326H8.53116H8.52972H8.52828H8.52684H8.52541H8.52397H8.52254H8.52111H8.51969H8.51826H8.51684H8.51542H8.514H8.51259H8.51117H8.50976H8.50835H8.50694H8.50553H8.50412H8.50272H8.50131H8.49991H8.49851H8.49711H8.49571H8.49431H8.49292H8.49152H8.49013H8.48874H8.48734H8.48595H8.48456H8.48317H8.48178H8.48039H8.47901H8.47762H8.47623H8.47484H8.47346H8.47207H8.47069H8.4693H8.46792H8.46653H8.46515H8.46376H8.46238H8.46099H8.45961H8.45822H8.45684H8.45545H8.45407H8.45268H8.45129H8.4499H8.44852H8.44713H8.44574H8.44435H8.44296H8.44157H8.44018H8.43878H8.43739H8.43599H8.4346H8.4332H8.4318H8.4304H8.429H8.4276H8.4262H8.42479H8.42338H8.42198H8.42057H8.41916H8.41774H8.41633H8.41491H8.41349H8.41207H8.41065H8.40923H8.4078H8.40637H8.40494H8.40351H8.40208H8.40064H8.3992H8.39776H8.39631H8.39487H8.39342H8.39197H8.39051H8.38905H8.38759H8.38613H8.38467H8.3832H8.38172H8.38025H8.37877H8.37729H8.37581H8.37432H8.37283H8.37134H8.36984H8.36834H8.36683H8.36533H8.36382H8.3623H8.36078H8.35926H8.35773H8.3562H8.35467H8.35313H8.35159H8.35004H8.34849H8.34694H8.34538H8.34382H8.34225H8.34068H8.33911H8.33752H8.33594H8.33435H8.33276H8.33116H8.32956H8.32795H8.32633H8.32472H8.32309H8.32147H8.31983H8.3182H8.31655H8.3149H8.31325H8.31159H8.30993H8.30826H8.30658H8.3049H8.30322H8.30153H8.29983H8.29812H8.29642H8.2947H8.29298H8.29125H8.28952H8.28778H8.28604H8.28429H8.28253H8.28077H8.279H8.27722H8.27544H8.27365H8.27186H8.27006H8.26825H8.26644H8.26461H8.26279H8.26095H8.25911H8.25726H8.25541H8.25354H8.25167H8.2498H8.24791H8.24602H8.24412H8.24222H8.2403H8.23838H8.23646H8.23452H8.23258H8.23063H8.22867H8.2267H8.22473H8.22275H8.22076H8.21876H8.21675H8.21474H8.21272H8.21069H8.20865H8.20661H8.20455H8.20249H8.20042H8.19834H8.19625H8.19415H8.19205H8.18993H8.18781H8.18568H8.18354H8.18139H8.17923H8.17706H8.17489H8.1727H8.17051H8.16831H8.16609H8.16387H8.16164H8.1594H8.15715H8.15489H8.15262H8.15034H8.14805H8.14576H8.14345H8.14113H8.1388H8.13647H8.13412H8.13176H8.12939H8.12702H8.12463H8.12223H8.11982H8.1174H8.11498H8.11254H8.11009H8.10763H8.10516H8.10267H8.10018H8.09768H8.09517H8.09264H8.09011H8.08756H8.085H8.08244H8.07986H8.07727H8.07466H8.07205H8.06943H8.06679H8.06414H8.06149H8.05882H8.05613H8.05344H8.05074H8.04802H8.04529H8.04255H8.0398H8.03704H8.03426H8.03147H8.02867H8.02586H8.02304H8.0202H8.01735H8.01449H8.01162H8.00873H8.00583H8.00292H8H7.99708H7.99417H7.99127H7.98838H7.98551H7.98265H7.9798H7.97696H7.97414H7.97133H7.96853H7.96574H7.96296H7.9602H7.95745H7.95471H7.95198H7.94926H7.94656H7.94387H7.94118H7.93851H7.93586H7.93321H7.93057H7.92795H7.92534H7.92273H7.92014H7.91756H7.915H7.91244H7.90989H7.90736H7.90483H7.90232H7.89982H7.89733H7.89484H7.89237H7.88991H7.88746H7.88502H7.8826H7.88018H7.87777H7.87537H7.87298H7.87061H7.86824H7.86588H7.86353H7.8612H7.85887H7.85655H7.85424H7.85195H7.84966H7.84738H7.84511H7.84285H7.8406H7.83836H7.83613H7.83391H7.83169H7.82949H7.8273H7.82511H7.82294H7.82077H7.81861H7.81646H7.81432H7.81219H7.81007H7.80795H7.80585H7.80375H7.80166H7.79958H7.79751H7.79545H7.79339H7.79135H7.78931H7.78728H7.78526H7.78325H7.78124H7.77924H7.77725H7.77527H7.7733H7.77133H7.76937H7.76742H7.76548H7.76354H7.76162H7.7597H7.75778H7.75588H7.75398H7.75209H7.7502H7.74833H7.74646H7.74459H7.74274H7.74089H7.73905H7.73721H7.73539H7.73356H7.73175H7.72994H7.72814H7.72635H7.72456H7.72278H7.721H7.71923H7.71747H7.71571H7.71396H7.71222H7.71048H7.70875H7.70702H7.7053H7.70358H7.70188H7.70017H7.69847H7.69678H7.6951H7.69342H7.69174H7.69007H7.68841H7.68675H7.6851H7.68345H7.6818H7.68017H7.67853H7.67691H7.67528H7.67367H7.67205H7.67044H7.66884H7.66724H7.66565H7.66406H7.66248H7.66089H7.65932H7.65775H7.65618H7.65462H7.65306H7.65151H7.64996H7.64841H7.64687H7.64533H7.6438H7.64227H7.64074H7.63922H7.6377H7.63618H7.63467H7.63317H7.63166H7.63016H7.62866H7.62717H7.62568H7.62419H7.62271H7.62123H7.61975H7.61828H7.6168H7.61533H7.61387H7.61241H7.61095H7.60949H7.60803H7.60658H7.60513H7.60369H7.60224H7.6008H7.59936H7.59792H7.59649H7.59506H7.59363H7.5922H7.59077H7.58935H7.58793H7.58651H7.58509H7.58367H7.58226H7.58084H7.57943H7.57802H7.57662H7.57521H7.5738H7.5724H7.571H7.5696H7.5682H7.5668H7.5654H7.56401H7.56261H7.56122H7.55982H7.55843H7.55704H7.55565H7.55426H7.55287H7.55148H7.5501H7.54871H7.54732H7.54593H7.54455H7.54316H7.54178H7.54039H7.53901H7.53762H7.53624H7.53485H7.53347H7.53208H7.5307H7.52931H7.52793H7.52654H7.52516H7.52377H7.52238H7.52099H7.51961H7.51822H7.51683H7.51544H7.51405H7.51266H7.51126H7.50987H7.50848H7.50708H7.50569H7.50429H7.50289H7.50149H7.50009H7.49869H7.49728H7.49588H7.49447H7.49306H7.49165H7.49024H7.48883H7.48741H7.486H7.48458H7.48316H7.48174H7.48031H7.47889H7.47746H7.47603H7.47459H7.47316H7.47172H7.47028H7.46884H7.4674H7.46595H7.4645H7.46305H7.46159H7.46013H7.45867H7.45721H7.45574H7.45428H7.4528H7.45133H7.44985H7.44837H7.44688H7.4454H7.44391H7.44241H7.44091H7.43941H7.43791H7.4364H7.43489H7.43337H7.43185H7.43033H7.4288H7.42727H7.42574H7.4242H7.42266H7.42111H7.41956H7.41801H7.41645H7.41488H7.41332H7.41175H7.41017H7.40859H7.407H7.40541H7.40382H7.40222H7.40061H7.39901H7.39739H7.39577H7.39415H7.39252H7.39089H7.38925H7.38761H7.38596H7.3843H7.38264H7.38098H7.37931H7.37763H7.37595H7.37426H7.37257H7.37087H7.36917H7.36746H7.36575H7.36402H7.3623H7.36056H7.35882H7.35708H7.35533H7.35357H7.35181H7.35004H7.34826H7.34648H7.34469H7.34289H7.34109H7.33928H7.33747H7.33564H7.33381H7.33198H7.33014H7.32829H7.32643H7.32457H7.3227H7.32082H7.31893H7.31704H7.31514H7.31323H7.31132H7.3094H7.30747H7.30553H7.30359H7.30164H7.29968H7.29771H7.29574H7.29375H7.29176H7.28976H7.28776H7.28574H7.28372H7.28169H7.27965H7.2776H7.27555H7.27348H7.27141H7.26933H7.26724H7.26514H7.26304H7.26092H7.2588H7.25666H7.25452H7.25237H7.25021H7.24804H7.24587H7.24368H7.24149H7.23928H7.23707H7.23484H7.23261H7.23037H7.22812H7.22586H7.22359H7.22131H7.21902H7.21672H7.21441H7.21209H7.20976H7.20742H7.20507H7.20271H7.20035H7.19797H7.19558H7.19318H7.19077H7.18835H7.18592H7.18348H7.18103H7.17857H7.17609H7.17361H7.17112H7.16861H7.1661H7.16357H7.16104H7.15849H7.15593H7.15336H7.15078H7.14819H7.14558H7.14297H7.14034H7.13771H7.13506H7.1324H7.12973H7.12704H7.12435H7.12164H7.11892H7.11619H7.11345H7.1107H7.10793H7.10516H7.10237H7.09956H7.09675H7.09393H7.09109H7.08824H7.08537H7.0825H7.07961H7.07671H7.0738H7.07087H7.06794H7.06499H7.06202H7.05905H7.05606H7.05306H7.05004H7.04701H7.04397H7.04092H7.03785H7.03477H7.03168H7.02857H7.02545H7.02232H7.01917H7.01601H7.01283H7.00965H7.00644H7.00323H7H6.99519H6.99038H6.98557H6.98075H6.97593H6.9711H6.96627H6.96144H6.95661H6.95177H6.94693H6.94208H6.93723H6.93238H6.92753H6.92267H6.91781H6.91295H6.90808H6.90321H6.89834H6.89346H6.88858H6.8837H6.87882H6.87393H6.86904H6.86414H6.85925H6.85435H6.84945H6.84454H6.83963H6.83472H6.82981H6.82489H6.81997H6.81505H6.81013H6.8052H6.80027H6.79534H6.7904H6.78546H6.78052H6.77558H6.77063H6.76568H6.76073H6.75578H6.75082H6.74586H6.7409H6.73594H6.73097H6.72601H6.72104H6.71606H6.71109H6.70611H6.70113H6.69615H6.69116H6.68618H6.68119H6.67619H6.6712H6.66621H6.66121H6.65621H6.6512H6.6462H6.64119H6.63619H6.63117H6.62616H6.62115H6.61613H6.61111H6.60609H6.60107H6.59604H6.59102H6.58599H6.58096H6.57592H6.57089H6.56586H6.56082H6.55578H6.55074H6.54569H6.54065H6.5356H6.53055H6.5255H6.52045H6.5154H6.51034H6.50529H6.50023H6.49517H6.49011H6.48504H6.47998H6.47492H6.46985H6.46478H6.45971H6.45464H6.44956H6.44449H6.43941H6.43434H6.42926H6.42418H6.4191H6.41401H6.40893H6.40385H6.39876H6.39367H6.38858H6.38349H6.3784H6.37331H6.36822H6.36312H6.35803H6.35293H6.34783H6.34274H6.33764H6.33254H6.32743H6.32233H6.31723H6.31212H6.30702H6.30191H6.29681H6.2917H6.28659H6.28148H6.27637H6.27126H6.26615H6.26103H6.25592H6.25081H6.24569H6.24058H6.23546H6.23035H6.22523H6.22011H6.21499H6.20987H6.20475H6.19963H6.19451H6.18939H6.18427H6.17915H6.17403H6.16891H6.16378H6.15866H6.15354H6.14841H6.14329H6.13816H6.13304H6.12791H6.12279H6.11766H6.11254H6.10741H6.10228H6.09716H6.09203H6.0869H6.08178H6.07665H6.07152H6.0664H6.06127H6.05614H6.05102H6.04589H6.04076H6.03564H6.03051H6.02538H6.02026H6.01513H6.01H6.00488H5.99975H5.99463H5.9895H5.98438H5.97925H5.97413H5.969H5.96388H5.95876H5.95363H5.94851H5.94339H5.93827H5.93314H5.92802H5.9229H5.91778H5.91266H5.90754H5.90242H5.89731H5.89219H5.88707H5.88196H5.87684H5.87173H5.86661H5.8615H5.85639H5.85127H5.84616H5.84105H5.83594H5.83083H5.82572H5.82062H5.81551H5.81041H5.8053H5.8002H5.79509H5.78999H5.78489H5.77979H5.77469H5.76959H5.7645H5.7594H5.75431H5.74921H5.74412H5.73903H5.73394H5.72885H5.72376H5.71867H5.71359H5.7085H5.70342H5.69834H5.69326H5.68818H5.6831H5.67803H5.67295H5.66788H5.6628H5.65773H5.65266H5.6476H5.64253H5.63746H5.6324H5.62734H5.62228H5.61722H5.61216H5.60711H5.60205H5.597H5.59195H5.5869H5.58185H5.57681H5.57176H5.56672H5.56168H5.55664H5.5516H5.54657H5.54154H5.5365H5.53148H5.52645H5.52142H5.5164H5.51138H5.50636H5.50134H5.49632H5.49131H5.4863H5.48129H5.47628H5.47127H5.4693C5.74614 13.7892 6 13.4672 6 13H5C5 13.0551 4.98294 13.123 4.83222 13.227Z" fill="#272F5A"/>
</svg>
);

const dataSource = [
    {
    name: 'Причина задачи',
    info: 'Малое потребление холодной воды'
    },
    {
    name: 'Номер задачи',
    info: 123
    },
    {
    name: 'Дата создания',
    info: '10.08.2019   10:38'
    },
    {
    name: 'Адрес',
    info: 'Набережные Челны, Машиностроительная, 75, кв.35'
    },
    {
    name: 'Комментарий к квартире',
    info: 'ПЛАН ЖКХ-9 ОТ 10,09,17 СЧ.ИСПР!!!! план ИЦ 10.04.18 сч.испр'
    },
    {
    name: 'Теги к квартире',
    tags: ['Дедка', 'Слушает громко музыку', '10 недопусков'],
    },
    {
    name: 'Собственник 1',
    info: 'Константинопольский К.К.'
    },
    {
    name: 'Статус собственника 1',
    info: 'Передает показания'
    },
    {
    name: 'Юридическое состояние',
    info: 'Физическое лицо'
    },
    {
    name: 'Номер ЛС собственника 1',
    info: '123456789'
    },
    {
    name: 'Контактный номер телефона',
    info: '+7 999 999-99-99'
    },
    {
    name: 'Собственник 2',
    info: 'Иванова К.С.'
    },
    {
    name: 'Статус собственника 2',
    info: 'Передает показания'
    },
    {
    name: 'Юридическое состояние',
    info: 'Физическое лицо'
    },
    {
    name: 'Номер ЛС собственника 2',
    info: '123456789'
    },
    {
    name: 'Контактный номер телефона',
    info: '+7 999 999-99-99'
    },

    
];

const columns = [
    {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    },
    {
    title: 'Info',
    dataIndex: 'info',
    key: 'info',
    },
];
    

export default class TaskDetail extends Component {

    state = {
        comments: [],
        submitting: false,
        value: '',
    };

    render() {

        const { comments, submitting, value } = this.state;

        return(
            <Fragment>
                <PageHeader
                  className="site-page-header"
                  onBack={() => null}
                  title="Назад"
                  backIcon={<BackIcon />}
                />
                <h1 className="page-title">Назначить сотрудника для проведения внеплановой проверки</h1>
                <div className="progress-wrapper">
                  <div className="progress-title">Неккоректные показания</div>
                  <div className="progress-bar-wrapper">
                    <div className="progress-bar">
                      <Progress percent={50} showInfo={false} strokeWidth={4} strokeColor={"#17B45A"} />
                    </div>
                    <div className="progress-info">
                      <div className="info-title">
                        Время на задачу
                      </div>
                      <div className="info-time">
                        36д 12ч (до 6.12.19)
                      </div>
                    </div>
                  </div>
                  <div className="progress-time">
                    <TimeIcon />
                    <span className="time-title">Время на этап: 36д 12ч (до 6.12.19)</span>
                  </div>
                </div>
  
                <div className="executor-wrapper">
                  <div className="executor-title">Исполнитель</div>
  
                  <Select style={{ width: 747, height: 48 }} listItemHeight={48} suffixIcon={<SelectSuffixIcon />} defaultValue="default">
                    <Option value="default">Выберите исполнителя</Option>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                  <button className="executor-btn">Завершить этап</button>
                </div>
  
  
                <Row>
                  <Col span={17}>
                    <div className="comments">
                      <div className="comments-title">
                        Комментарии к задаче
                      </div>
                      {comments.length > 0 && <CommentList comments={comments} />}
                      <Comment
                        avatar={
                          <Avatar
                            src={ <UserAvatar /> }
                            alt=""
                          />
                        }
                        content={
                          <Editor
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            submitting={submitting}
                            value={value}
                          />
                        }
                      />
                    </div>

                    <div className="detail-information">
                      <div className="title">Подробная информация</div>

                      <Table dataSource={dataSource} columns={columns} showHeader={false} pagination={false} />
                    </div>
                  </Col>
                  <Col span={7} className="steps">
                    <div className="steps-title">Этапы выполнения</div>
                    <Steps direction="vertical" current={0}>
                      <Step title="" description="Назначить сотрудника для проведения внеплановой проверки." />
                      <Step title="" description="Добавить Акт проверки прибора / акт об отказе в допуске" />
                      <Step icon={<StepFinishIcon />} title="" description="Завершение задачи" />
                    </Steps>
                  </Col>
                </Row>
            </Fragment>
        );
    }
}