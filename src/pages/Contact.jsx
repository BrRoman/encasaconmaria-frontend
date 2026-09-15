import { useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../components/Menu";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  let params = useParams();

  const displayMessage = () => {
    return (
      params.status === "success" && (
        <div id="mensaje">
          <p>Su mensaje fue enviado con éxito.</p>
          <p>¡Gracias!</p>
          <p>Nos pondremos en contacto con Usted lo antes posible.</p>
        </div>
      )
    );
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Menu />

      <div
        id="contact"
        className="w-full md:w-2/3 lg:w-1/2 mx-auto rounded-md mb-8"
      >
        <h1>¡Contáctanos!</h1>

        {displayMessage()}

        <form
          method="post"
          action="https://forms.un-static.com/forms/539fb9910b700b58d2a033a92ac3723d73fe553e"
          className="flex flex-col items-start gap-4 p-8"
        >
          {/* Nombre */}
          <div className="form-group">
            <label htmlFor="firstname">Nombre:</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          {/* Apellidos */}
          <div className="form-group">
            <label htmlFor="lastname">Apellidos:</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <small className="text-gray-500">
              Nunca compartiremos su correo electrónico con nadie más.
            </small>
          </div>

          {/* Mensaje */}
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escribe aquí su mensaje, su pregunta o su pedido."
              required
              rows="10"
            />
          </div>

          <div className="flex justify-center gap-4 w-full">
            {/* Cancel */}
            <button
              type="reset"
              value="reset"
              onClick={() => handleReset()}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 border border-gray-600 rounded"
            >
              Cancelar
            </button>

            {/* Submit */}
            <button
              type="submit"
              value="Submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 border border-blue-600 rounded"
            >
              Enviar (con Captcha)
            </button>
          </div>
        </form>

        <div>
          <small>
            (Powered by{" "}
            <a rel="nofollow" href="https://un-static.com/">
              Un-static Forms
            </a>
            )
          </small>
        </div>
      </div>
    </>
  );
}
