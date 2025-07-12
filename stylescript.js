const saudeSelect = document.getElementById("saude");
const outroSaudeContainer = document.getElementById("outroSaudeContainer");

saudeSelect.addEventListener("change", function () {
  outroSaudeContainer.classList.toggle("hidden", this.value !== "Outro");
});

document.getElementById("resetBtn").addEventListener("click", () => {
  document.getElementById("healthForm").reset();
  outroSaudeContainer.classList.add("hidden");
});

document.getElementById("voltarBtn").addEventListener("click", () => {
  document.getElementById("resultadoContainer").classList.add("hidden");
  document.getElementById("formContainer").classList.remove("hidden");
});

document.getElementById("healthForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const entries = Object.fromEntries(data.entries());

  if (entries.saude === "Outro") {
    entries.saude = entries.saudeOutro || "Não especificado";
  }
  delete entries.saudeOutro;

  let sugestao = "";
  switch (entries.objetivo) {
    case "perder-peso":
      sugestao = "Sugerimos treinos aeróbicos leves a moderados combinados com musculação funcional.";
      break;
    case "ganhar-massa":
      sugestao = "Recomendamos um plano com foco em hipertrofia muscular e alimentação proteica.";
      break;
    case "melhorar-condicao":
      sugestao = "Ideal começar com exercícios cardiovasculares e de resistência progressiva.";
      break;
    case "aumentar-flexibilidade":
      sugestao = "Yoga, pilates e alongamentos dinâmicos são ótimos para você.";
      break;
    case "reduzir-estresse":
      sugestao = "Atividades como yoga, caminhadas leves e respiração guiada são recomendadas.";
      break;
    default:
      sugestao = "Nosso coach virtual irá montar um plano ideal baseado no seu perfil.";
  }

  document.getElementById("formContainer").classList.add("hidden");
  document.getElementById("mensagemResultado").textContent = `Olá, ${entries.nome}! ${sugestao}`;
  document.getElementById("resultadoContainer").classList.remove("hidden");
});

