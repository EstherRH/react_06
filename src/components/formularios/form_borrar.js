import React, {useState, useEffect, useContext} from "react";
import campaignsServices from "../../../services/myme-server/campaigns.service"
import Row from "./Row";
import CircularProgress from "@material-ui/core/CircularProgress";
import {ArrowBack} from "../../../assets/svg/homepage";
import "./Sender.scss";
import {Info, Whatsapp, Wbocadillo} from "../../../assets/svg/dashboard";
import {AppContext} from "../../../context/app-context";
import DialogContent from "@material-ui/core/DialogContent";
import Modal from "@material-ui/core/Modal";
import {useHistory, useLocation} from "react-router-dom";
import SentModal from "./SentModal";
import {GetLocalizedStrings} from "../../../utils";
import {SenderSentences} from "../../../constants/Sentences";
import {useCookies} from "react-cookie";
import Dropzone from "./Dropzone";
import ReactTooltip from "react-tooltip";
import { QuestionMarkIcon } from "../../../assets/svg/dashboard";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


let localizedStrings = GetLocalizedStrings(SenderSentences);


const Sender = (props) => {
    let location = useLocation()
    const history = useHistory();
    const [language] = useCookies(["language"]);
    const [strings, setStrings] = useState(localizedStrings);
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState("")
    const [subject, setSubject] = useState("")
    const [sent, setSent] = useState(false)
    const [sentData, setSentData] = useState()
    const [showSentModal, setShowSentModal] = useState(false)
    const [excelError, setExcelError] = useState(false)
    const [contacts, setContacts] = useState([])
    const [campaignID, setCampaignID] = useState(location.data?.campaignID ? location.data?.campaignID : "")
    const [response, setResponse] = useState("")
    const [type, setType] = useState()
    const { userData } = useContext(AppContext);
    const [from, setFrom] = useState(userData.email)
    const [logo, setLogo] = useState()




    const sendEmails = () =>{
        console.log("esta es la data anmtes de enviard", campaignID)
        setShowSentModal(true)
        campaignsServices.sendCampaign(sentData, campaignID)
            .then((resp)=>{
                setSent(true)
                setResponse(resp.data["message"])
                console.log(resp)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    useEffect(()=> {
        setMessage(strings && strings.message)
    }, [strings])

    useEffect(()=> {
        console.log(logo)
    }, [logo])

    useEffect(() => {
        if (campaignID !== undefined) {
            campaignsServices.getExcelData(campaignID).then((resp) => {
                setContacts(resp.data["data"])
                setType(resp.data["type"])
                setLoading(false)

            }).catch((error) => {
                console.log(error.response);
                setLoading(false)
                setExcelError(true)
            });
        }
    }, [campaignID]);

    useEffect(() => {
        console.log(subject)
        if ( contacts.length > 0 && userData !== undefined) {
            console.log("aqui se crea la data del mail")

            let emailData = {
                sender: from,
                subject: subject,
                company: userData.company.name,
                logo: logo,
                message: message.replace(/(?:\r\n|\r|\n)/g, '<br>'),
                contacts:[...contacts]
            }
            setSentData(emailData)
            console.log(emailData, "esta es la data cuando se crea")
        }
    }, [userData, contacts, message, subject, logo]);




    return (
        <div className="exceltel-container">

            <div className="excelwp-title-container">
                <span type="button" onClick={() => history.goBack()}>
                  <ArrowBack />
                </span>
                <p className="excelwp-title">Configurar y enviar mensajes por Email</p>
            </div>

            <div className="table-wrapper">

                {loading ?
                    <CircularProgress size={100}/>
                    :
                    excelError ?
                        <p className="row-text">No se pudo cargar la tabla</p>
                        :
                        type !== "email" ?

                            <p className="row-text">La campaña no es de email. Puedes volver a la pantalla anterior y enviar un whatsapp</p>

                            :

                            <>
                                <Formik
                                    initialValues={{
                                        firstName: '',
                                    }}
                                    validationSchema={Yup.object().shape({
                                        firstName: Yup.string()
                                            .required('First Name is required'),
                                    })}

                                    onSubmit={() => {
                                        sendEmails();
                                    }}

                                    render={({errors, status, touched}) => (
                                        <Form>
                                            {/*Cuadro Email*/}
                                            <div className="alert-info">

                                                <div>
                                                    <p className="excelwp-text">Edita a tu gusto el remitente, el asunto y el mensaje que les llegará a tus usuarios junto con su enlace personalizado.</p>
                                                </div>

                                                <div className={"detail-grid"}>
                                                    <div className={"message-wrapper two"}>
                                                        <div>
                                                            <p className="message-wrapper-text">Asunto</p>
                                                        </div>
                                                        <div className="message-wrapper-1">
                                                            <label htmlFor="subject" className="inp">
                                                                <input
                                                                    name="firstName" type="text"
                                                                       className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')}
                                                                    value={subject} id={"subject"} placeholder="&nbsp;" type="text" maxLength="30" onChange={(e) => {
                                                                    setSubject(e.target.value)
                                                                }}

                                                                />
                                                                <ErrorMessage name="firstName" component="div" className="invalid-feedback"/>
                                                                <span className="label">Asunto del mail</span>
                                                                <span className="focus-bg"></span>
                                                            </label>
                                                            <QuestionMarkIcon
                                                                data-for="react-tooltip"
                                                                data-tip="Dale a tus clientes una buena razón para abrir este correo. Procura no utilizar más de 9 palabras (60 caracteres) y evita usar más de 3 signos de admiración"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className={"message-wrapper one"}>
                                                        <div>
                                                            <p className="message-wrapper-text">Remitente</p>
                                                        </div>
                                                        <div className="message-wrapper-1">
                                                            <label htmlFor="from" className="inp">
                                                                <input value={from} type="text" id="from" placeholder="&nbsp;" className={"Input-text"} maxLength="30" onChange={(e) => {
                                                                    setFrom(e.target.value)
                                                                }}/>
                                                                <span className="label">Añade aqui tu mail identificativo</span>
                                                                <span className="focus-bg"></span>
                                                            </label>
                                                            <QuestionMarkIcon
                                                                data-for="react-tooltip"
                                                                data-tip=" Introduce el email que empleas habitualmente para enviar comunicaciones a tus clientes, así podrán reconocerte fácilmente."
                                                            />
                                                        </div>
                                                    </div>
                                                    {/*<Dropzone logo={logo} setLogo={setLogo}/>*/}
                                                </div>

                                                <div className={"message-wrapper"}>
                                                    <p className="message-wrapper-text">Contenido</p>
                                                    <div className="message-wrapper-1">
                                                        <label htmlFor="description" className="inp text-area">
                                            <textarea className={"message"} id={"description"} placeholder="&nbsp;" type="text"  onChange={(e) => {
                                                setMessage(e.target.value)
                                            }}></textarea>
                                                            <span className="label">Escribe el contenido de tu mensaje</span>
                                                            <span className="focus-bg"></span>
                                                        </label>
                                                        <QuestionMarkIcon
                                                            data-for="react-tooltip"
                                                            data-tip="Introduce el mensaje de tu campaña. Intenta que sea lo más breve, claro y cercano posible para que anime a tus clientes a abrir su vídeo."
                                                        />
                                                    </div>
                                                </div>

                                                <div className="alert-info-2">
                                                    <Info/>
                                                    <p className="alert-info-text-1">En el futuro habilitaremos la opción para que puedas introducir tu logo y personalizar el asunto con el nombre de cada uno de tus clientes. <br/>
                                                        ¡Estamos trabajando en ello!</p>
                                                </div>
                                            </div>

                                            <ReactTooltip id="react-tooltip" type="dark" effect="solid" place="bottom" />

                                            {/* Tabla Email*/}
                                            <table>
                                                <thead>
                                                <tr>
                                                    <th className="cabecera widht">Nº</th>
                                                    {/*<th className="cabecera widht">Seleccionar</th>*/}
                                                    <th className="cabecera widht1">Nombre</th>
                                                    <th className="cabecera widht1">Correo</th>
                                                    {/*<th class="cabecera widht1"> D</th>*/}

                                                </tr>
                                                </thead>
                                                <tbody>

                                                {contacts && contacts.map((contact, index) => (

                                                    <Row key={index} index={index + 1} name={contact.NAME} email={contact.EMAIL} sent={contact.ENVIADO} url={contact.url}/>
                                                ))}

                                                </tbody>

                                            </table>

                                            <button
                                                type="submit"
                                                className={"excel-save-button"} >Enviar</button>

                                            {/*<>*/}
                                            {/*    <Button className={"excel-save-button"} variant="primary" onClick={() => setModalShow(true)}>*/}
                                            {/*        Guardar*/}
                                            {/*    </Button>*/}

                                            {/*    <MyVerticallyCenteredModal*/}
                                            {/*        show={modalShow}*/}
                                            {/*        onHide={() => setModalShow(false)}*/}
                                            {/*    />*/}
                                            {/*</>*/}

                                        </Form>
                                    )}
                                />

                            </>
                }

            </div>
            <Modal
                open={showSentModal}
                onClose={() => {
                    setShowSentModal(false);
                    history.push("/dashboard/campaign");
                }}
            >
                <DialogContent>
                    <SentModal resp={response} sent={sent}  closeModal={() => setShowSentModal(false)} />
                </DialogContent>
            </Modal>
        </div>
    );
};
export default Sender;