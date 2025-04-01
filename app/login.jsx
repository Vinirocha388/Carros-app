import React from "react";

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: "0",
        padding: "20px", 
        fontFamily: "'Roboto', sans-serif",
        background: `url('zhttps://files.meiobit.com/wp-content/uploads/2017/07/20170713cars-3-001.jpg') no-repeat center center/cover`,
    },
    card: {
        background: "#ffffff",
        padding: "30px",
        borderRadius: "16px",
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)", 
        textAlign: "center",
        width: "90%", 
        maxWidth: "400px", 
        animation: "fadeIn 0.5s ease-in-out",
        margin: "20px", 
    },
    image: {
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        marginBottom: "20px",
    },
    formGroup: {
        marginBottom: "20px",
        textAlign: "left",
    },
    label: {
        display: "block",
        marginBottom: "8px",
        fontWeight: "bold",
        color: "#333",
        fontSize: "15px",
    },
    input: {
        width: "100%",
        padding: "12px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        fontSize: "14px",
        outline: "none",
        transition: "border-color 0.3s",
    },
    inputFocus: {
        borderColor: "#292929",
    },
    button: {
        backgroundColor: "#292929",
        color: "white",
        padding: "12px 20px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
        width: "100%",
        transition: "background-color 0.3s",
    },
    buttonHover: {
        backgroundColor: "#000000",
    },
};

const Login = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src="https://recreio.com.br/media/uploads/2024/02/relampago-mcqueen_capa.jpg"
          alt="Pessoa"
          style={styles.image}
        />
        <h2 style={{ color: "#333", marginBottom: "20px" }}>Bem-vindo</h2>
        <form>
          <div style={styles.formGroup}>
            <label htmlFor="username" style={styles.label}>
              Nome
            </label>
            <input
              type="text"
              id="username"
              placeholder="Digite seu nome"
              style={styles.input}
              onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
              onBlur={(e) => (e.target.style.borderColor = "#ddd")}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>
              Senha
            </label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              style={styles.input}
              onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
              onBlur={(e) => (e.target.style.borderColor = "#ddd")}
            />
          </div>
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;