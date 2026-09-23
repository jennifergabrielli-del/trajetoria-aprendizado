document.addEventListener("DOMContentLoaded", () => {
  // Pequeno efeito de entrada
  document.querySelectorAll(".character-card, .level").forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(15px)";
    setTimeout(() => {
      item.style.transition = "opacity .45s ease, transform .45s ease";
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, 100 + index * 100);
  });

  // Cards das personagens
  const modal = document.getElementById("profileModal");
  const modalName = document.getElementById("modalName");
  const modalText = document.getElementById("modalText");
  const modalTag = document.getElementById("modalTag");

  const profiles = {
    jennifer: {
      tag: "PERSONAGEM 01 · JENNIFER",
      name: "Jennifer Gabrielli",
      text: "Jennifer encara sua trajetória como uma aventura cheia de etapas. Cada experiência ajuda a construir novos conhecimentos, fortalecer sua determinação e aproximá-la dos seus objetivos.",
      instagram: "https://www.instagram.com/_jennigabrielly?stkn=NXR2dGZzeXUyY3V3"
    },
    marina: {
      tag: "PERSONAGEM 02 · MARINA",
      name: "Marina Melo",
      text: "Marina segue sua trajetória aproveitando cada fase como uma oportunidade para aprender, superar desafios e construir novas memórias ao lado das pessoas que fazem parte da sua caminhada.",
      instagram: "https://www.instagram.com/sub._marina03?stkn=MW41bWpkZXdrNjJmMA=="
    }
  };

  document.querySelectorAll(".open-modal").forEach(button => {
    button.addEventListener("click", () => {
      const character = button.dataset.character;
      const profile = profiles[character];

      modalTag.textContent = profile.tag;
      modalName.textContent = profile.name;
      modalText.textContent = profile.text;

      // Link do Instagram no perfil
      let instagramLink = modal.querySelector(".instagram-link");

      if (!instagramLink) {
        instagramLink = document.createElement("a");
        instagramLink.className = "instagram-link";
        instagramLink.target = "_blank";
        instagramLink.rel = "noopener noreferrer";
        modalText.after(instagramLink);
      }

      instagramLink.href = profile.instagram;
      instagramLink.textContent = "📷 Ver Instagram";

      modal.classList.add("show");
    });
  });

  // Níveis da trajetória
  const levelModal = document.getElementById("levelModal");
  const levelTitle = document.getElementById("levelTitle");
  const levelDescription = document.getElementById("levelDescription");
  const levelTag = document.getElementById("levelTag");
  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");

  const levels = {

  1: [
    "NÍVEL 01",
    "Fundamentos HTML",
    "Estruturas básicas e semântica. Nesta fase aprendemos a construir a base de uma página web e organizar seus conteúdos."
  ],

  2: [
    "NÍVEL 02",
    "Estilização CSS",
    "Layout, cores e tipografia. Nesta fase aprendemos a transformar a estrutura HTML em uma página visualmente organizada e bonita."
  ],

  3: [
    "NÍVEL 03",
    "JavaScript Essencial",
    "Interatividade e manipulação DOM. Aprendemos a fazer o site responder às ações do usuário."
  ],

  4: [
    "NÍVEL 04",
    "Design Responsivo",
    "Adaptabilidade multi-dispositivo. O objetivo é fazer o site funcionar bem em diferentes tamanhos de tela."
  ],

  5: [
    "NÍVEL 05",
    "Acessibilidade Web",
    "Inclusão e boas práticas. Aprendemos que uma página deve ser pensada para diferentes pessoas e necessidades."
  ],

  6: [
    "NÍVEL FINAL",
    "Otimização Performance",
    "Velocidade e eficiência. A última fase busca deixar o site rápido, eficiente e agradável para quem acessa."
  ]

};;

  document.querySelectorAll(".level-btn").forEach(button => {
    button.addEventListener("click", () => {
      const id = button.dataset.level;
      const data = levels[id];
      levelTag.textContent = data[0];
      levelTitle.textContent = data[1];
      levelDescription.textContent = data[2];
      levelModal.classList.add("show");

      const percentage = Math.round((Number(id) / 6) * 100);
      if (progressBar) {
        progressBar.style.width = percentage + "%";
        progressText.textContent = percentage + "%";
      }
    });
  });

  // Fechar modais
  document.querySelectorAll(".close-modal").forEach(button => {
    button.addEventListener("click", () => {
      button.closest(".modal").classList.remove("show");
    });
  });

  document.querySelectorAll(".modal").forEach(box => {
    box.addEventListener("click", event => {
      if (event.target === box) box.classList.remove("show");
    });
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      document.querySelectorAll(".modal.show").forEach(box => box.classList.remove("show"));
    }
  });
});