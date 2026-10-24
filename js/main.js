/* =============================================
   IA & Etica - Landing Page JavaScript
   ============================================= */

const TOTAL = 5;
    let currentQ = 0;
    let answers = new Array(TOTAL).fill(null); // null | true | false

    const feedbacks = [
      {
        correct: "✅ Correcto. El banco, como entidad que implementa y opera el sistema, tiene la responsabilidad directa e inmediata ante la persona afectada. Aunque todos los actores comparten culpa, la institución es el primer punto de rendición de cuentas.",
        wrong:   "ℹ️ Aunque hay responsabilidad compartida, el banco es el primer responsable porque decidió implementar ese sistema y asumió el deber de garantizar que sus decisiones no discriminen. La responsabilidad difusa no exime al agente inmediato."
      },
      {
        correct: "✅ Exacto. La autoridad judicial no puede externalizar su responsabilidad ética en un sistema automatizado. El juez tiene el deber de examinar críticamente cualquier herramienta que use para decidir sobre la libertad de una persona.",
        wrong:   "ℹ️ La respuesta más sólida éticamente es que no: el juez no puede delegar. Las decisiones sobre libertad humana requieren supervisión y juicio humano. Ningún argumento técnico o institucional elimina esta responsabilidad moral."
      },
      {
        correct: "✅ Muy bien. El principio de justicia exige que los beneficios y cargas se distribuyan equitativamente. Cuando un algoritmo amplifica desigualdades estructurales, viola este principio aunque técnicamente funcione como fue diseñado.",
        wrong:   "ℹ️ Aunque varios principios están en juego, el de justicia es el más central: el sistema perpetúa y amplifica desigualdades socioeconómicas preexistentes, haciendo que quienes ya tienen menos reciban aún menos atención médica."
      },
      {
        correct: "✅ Correcto. La neutralidad algorítmica es un mito. Todo modelo refleja decisiones humanas: qué datos usar, qué optimizar, qué considerar relevante. Los sesgos históricos en los datos se convierten en sesgos futuros en las predicciones.",
        wrong:   "ℹ️ Los algoritmos no son neutrales. Aprenden de datos históricos que reflejan inequidades del pasado y optimizan objetivos definidos por personas con sus propios valores y puntos ciegos. La matemática puede ser objetiva; los datos y los objetivos no."
      },
      {
        correct: "✅ Exacto. Cuando un sistema automatizado puede afectar derechos fundamentales —trabajo, libertad, salud, crédito— la transparencia y la rendición de cuentas deben primar sobre los intereses comerciales. Sin explicabilidad, no hay responsabilidad posible.",
        wrong:   "ℹ️ La posición más coherente con los derechos humanos es que sí debe prevalecer la transparencia. Los derechos fundamentales no pueden estar subordinados a intereses económicos cuando está en juego la equidad y la no discriminación."
      }
    ];

    const profiles = [
      {
        min: 0, max: 1,
        title: "Observador en formación",
        desc: "Estás comenzando a explorar la ética algorítmica. Cada vez que usas tecnología, hay decisiones de valor implícitas. Seguir cuestionando es el primer paso.",
        color: "var(--sky)",
        badges: [{ text: "Curioso", bg: "var(--sky)", color: "#1a3a5c" }]
      },
      {
        min: 2, max: 3,
        title: "Analista crítico",
        desc: "Comprendes que la responsabilidad en los sistemas de IA es compleja y compartida. Distingues entre actores y tienes conciencia de los mecanismos de distribución de culpa.",
        color: "var(--peach)",
        badges: [
          { text: "Analítico",  bg: "var(--peach)",    color: "#5c3a1a" },
          { text: "Reflexivo",  bg: "var(--lavender)", color: "#3a2a5c" }
        ]
      },
      {
        min: 4, max: 5,
        title: "Guardián algorítmico",
        desc: "Tienes una sólida comprensión de la ética en sistemas de IA. Identificas con precisión quién debe rendir cuentas y por qué. El mundo de la IA necesita personas como tú.",
        color: "var(--sage)",
        badges: [
          { text: "Experto ético",        bg: "var(--sage)",     color: "#1e4027" },
          { text: "Pensador crítico",     bg: "var(--rose)",     color: "#7a3a3a" },
          { text: "Guardián de derechos", bg: "var(--lavender)", color: "#3a2a5c" }
        ]
      }
    ];

    function selectAnswer(btn, qIdx, isCorrect) {
      const question = document.getElementById('q' + qIdx);
      const allBtns = question.querySelectorAll('.option-btn');

      // Prevent re-answering
      if (answers[qIdx] !== null) return;

      answers[qIdx] = isCorrect;

      // Disable all buttons in this question
      allBtns.forEach(b => { b.style.pointerEvents = 'none'; });

      // Mark chosen button
      btn.classList.add(isCorrect ? 'correct' : 'wrong');

      // Show feedback
      const fb = document.getElementById('fb-' + qIdx);
      fb.textContent = isCorrect ? feedbacks[qIdx].correct : feedbacks[qIdx].wrong;
      fb.className = 'quiz-feedback show ' + (isCorrect ? 'correct-fb' : 'wrong-fb');

      // Enable next/submit
      const btnNext = document.getElementById('btn-next');
      btnNext.disabled = false;
      if (qIdx === TOTAL - 1) {
        btnNext.textContent = 'Ver mi resultado →';
      }

      updateProgress();
    }

    function nextQuestion() {
      if (answers[currentQ] === null) return;

      if (currentQ < TOTAL - 1) {
        document.getElementById('q' + currentQ).classList.remove('active');
        currentQ++;
        document.getElementById('q' + currentQ).classList.add('active');
        document.getElementById('btn-prev').disabled = false;
        document.getElementById('btn-next').disabled = answers[currentQ] === null;
        if (currentQ === TOTAL - 1 && answers[currentQ] !== null) {
          document.getElementById('btn-next').textContent = 'Ver mi resultado →';
        } else if (currentQ < TOTAL - 1) {
          document.getElementById('btn-next').textContent = 'Siguiente →';
        }
        updateProgress();
      } else {
        showResult();
      }
    }

    function prevQuestion() {
      if (currentQ > 0) {
        document.getElementById('q' + currentQ).classList.remove('active');
        currentQ--;
        document.getElementById('q' + currentQ).classList.add('active');
        document.getElementById('btn-prev').disabled = currentQ === 0;
        document.getElementById('btn-next').disabled = answers[currentQ] === null;
        if (currentQ === TOTAL - 1 && answers[currentQ] !== null) {
          document.getElementById('btn-next').textContent = 'Ver mi resultado →';
        } else {
          document.getElementById('btn-next').textContent = 'Siguiente →';
        }
        updateProgress();
      }
    }

    function updateProgress() {
      const pct = ((currentQ + 1) / TOTAL) * 100;
      document.getElementById('progress-bar').style.width = pct + '%';
      document.getElementById('progress-text').textContent = (currentQ + 1) + ' / ' + TOTAL;
    }

    function showResult() {
      const score = answers.filter(a => a === true).length;

      // Hide questions and nav
      for (let i = 0; i < TOTAL; i++) {
        const q = document.getElementById('q' + i);
        if (q) q.classList.remove('active');
      }
      document.getElementById('quiz-nav').style.display = 'none';

      // Progress to 100%
      document.getElementById('progress-bar').style.width = '100%';
      document.getElementById('progress-text').textContent = TOTAL + ' / ' + TOTAL;

      // Get profile
      const profile = profiles.find(p => score >= p.min && score <= p.max);

      // Update result circle
      const circle = document.getElementById('result-circle');
      circle.style.background = profile.color;
      document.getElementById('result-score-text').textContent = score + '/5';
      document.getElementById('result-title').textContent = profile.title;
      document.getElementById('result-desc').textContent = profile.desc;

      // Badges
      const badgesEl = document.getElementById('profile-badges');
      badgesEl.innerHTML = '';
      profile.badges.forEach(b => {
        const span = document.createElement('span');
        span.className = 'profile-badge';
        span.style.background = b.bg;
        span.style.color = b.color;
        span.textContent = b.text;
        badgesEl.appendChild(span);
      });

      document.getElementById('quiz-result').classList.add('show');

      // Store score for share
      window._quizScore = score;
      window._quizProfile = profile.title;
    }

    function restartQuiz() {
      currentQ = 0;
      answers = new Array(TOTAL).fill(null);

      // Reset questions
      for (let i = 0; i < TOTAL; i++) {
        const q = document.getElementById('q' + i);
        q.classList.remove('active');
        q.querySelectorAll('.option-btn').forEach(b => {
          b.classList.remove('correct', 'wrong');
          b.style.pointerEvents = '';
        });
        const fb = document.getElementById('fb-' + i);
        fb.className = 'quiz-feedback';
        fb.textContent = '';
      }

      document.getElementById('quiz-result').classList.remove('show');
      document.getElementById('quiz-nav').style.display = '';
      document.getElementById('q0').classList.add('active');
      document.getElementById('btn-prev').disabled = true;
      document.getElementById('btn-next').disabled = true;
      document.getElementById('btn-next').textContent = 'Siguiente →';
      document.getElementById('progress-bar').style.width = '20%';
      document.getElementById('progress-text').textContent = '1 / 5';
    }

    function shareResult() {
      const text = 'Hice el test sobre ética en IA y obtuve ' + (window._quizScore || 0) + '/5. Mi perfil: ' + (window._quizProfile || '') + '. ¿Cuál es el tuyo?';
      if (navigator.share) {
        navigator.share({ title: 'IA & Ética', text });
      } else {
        navigator.clipboard.writeText(text).then(() => alert('¡Resultado copiado al portapapeles! Compártelo donde quieras.'));
      }
    }

    // ── SCROLL ANIMATIONS ──────────────────────────────────
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Animate responsibility bars when card becomes visible
          entry.target.querySelectorAll && entry.target.querySelectorAll('.resp-fill').forEach(bar => {
            bar.style.width = bar.dataset.width + '%';
          });
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-up, .timeline-item').forEach(el => io.observe(el));

    // ── NAV SHADOW ─────────────────────────────────────────
    window.addEventListener('scroll', () => {
      document.getElementById('main-nav').style.boxShadow =
        window.scrollY > 40 ? '0 2px 24px rgba(0,0,0,0.08)' : 'none';
    });
