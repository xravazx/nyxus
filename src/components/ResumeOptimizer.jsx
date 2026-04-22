import { useState, useRef } from 'react';
import { Upload, FileText, CheckCircle, Cpu, Copy, Check, Sparkles, User, Briefcase, Code } from 'lucide-react';
import styles from './ResumeOptimizer.module.css';

const ResumeOptimizer = () => {
  const [status, setStatus] = useState('idle'); // 'idle', 'processing', 'success'
  const [photoPreview, setPhotoPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('processing');
    
    // Simulate AI Processing time with a dynamic feeling
    setTimeout(() => {
      const mockAiResponse = {
        "perfil_profesional": "Profesional altamente capacitado con enfoque en resultados. Experiencia comprobada en optimización de procesos y liderazgo de equipos técnicos. Orientado a la innovación y resolución de problemas complejos mediante soluciones tecnológicas eficientes.",
        "experiencia_optimizada": [
          "Lideré el rediseño arquitectónico del sistema principal, incrementando el rendimiento general en un 40%.",
          "Desarrollé flujos de automatización para tareas recurrentes, ahorrando más de 15 horas semanales al equipo.",
          "Implementé nuevas estrategias de despliegue continuo (CI/CD), reduciendo los tiempos de entrega de software a la mitad."
        ]
      };
      
      setResult(mockAiResponse);
      setStatus('success');
    }, 3000);
  };

  const copyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(JSON.stringify(result, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="ats-optimizer" className={`section-padding ${styles.optimizerSection}`}>
      <div className={styles.glowOrb}></div>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.headerArea} data-aos="fade-down">
          <div className={styles.badgeContainer}>
            <span className={styles.aiBadge}><Sparkles size={14} /> AI Powered System</span>
          </div>
          <h2 className={styles.title}>Optimizador ATS Pro</h2>
          <p className={styles.subtitle}>
            Transforma tu experiencia en crudo en un perfil magnético. Nuestro motor de IA estructura tus datos para burlar los filtros corporativos y destacar tus verdaderos logros.
          </p>
        </div>

        <div className={styles.contentGrid}>
          {/* Columna Izquierda: Formulario */}
          <div className={`${styles.formCard} glass`} data-aos="fade-right">
            <div className={styles.cardHeader}>
              <div className={styles.dotGroup}>
                <span className={styles.dot} style={{backgroundColor: '#ff5f56'}}></span>
                <span className={styles.dot} style={{backgroundColor: '#ffbd2e'}}></span>
                <span className={styles.dot} style={{backgroundColor: '#27c93f'}}></span>
              </div>
              <span className={styles.windowTitle}>input_data.exe</span>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              
              <div className={styles.uploadSection} 
                   onDragOver={handleDragOver} 
                   onDrop={handleDrop}
                   onClick={() => fileInputRef.current.click()}>
                <input 
                  type="file" 
                  ref={fileInputRef}
                  accept="image/*" 
                  onChange={handlePhotoChange} 
                  hidden 
                />
                {photoPreview ? (
                  <div className={styles.previewContainer}>
                    <img src={photoPreview} alt="Profile Preview" className={styles.avatar} />
                    <div className={styles.changeOverlay}><span>Cambiar</span></div>
                  </div>
                ) : (
                  <div className={styles.uploadPrompt}>
                    <div className={styles.uploadIconWrapper}>
                      <Upload size={28} className={styles.uploadIcon} />
                    </div>
                    <span className={styles.uploadText}>Arrastra tu foto o haz clic</span>
                    <span className={styles.uploadSubtext}>Formatos JPG, PNG (Max 2MB)</span>
                  </div>
                )}
              </div>

              <div className={styles.inputsGrid}>
                <div className={styles.inputGroup}>
                  <label htmlFor="role"><User size={14}/> Puesto Objetivo</label>
                  <input type="text" id="role" placeholder="Ej. Senior Frontend Developer" required />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="skills"><Code size={14}/> Habilidades Clave</label>
                  <input type="text" id="skills" placeholder="React, Node, AWS, Agile..." required />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="experience"><Briefcase size={14}/> Experiencia en Crudo</label>
                <textarea 
                  id="experience" 
                  rows="4" 
                  placeholder="Describe lo que hacías: 'Arreglaba bugs en la página principal y subía el código a producción todos los viernes...'" 
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.submitBtn} disabled={status === 'processing' || status === 'success'}>
                <div className={styles.btnContent}>
                  {status === 'idle' && <><Cpu size={18} /> Iniciar Optimización</>}
                  {status === 'processing' && <><Cpu size={18} className={styles.spinIcon} /> Analizando Datos...</>}
                  {status === 'success' && <><CheckCircle size={18} /> Optimización Completa</>}
                </div>
                <div className={styles.btnGlow}></div>
              </button>
            </form>
          </div>

          {/* Columna Derecha: Resultado o Estado */}
          <div className={`${styles.resultCard} glass`} data-aos="fade-left" data-aos-delay="100">
            <div className={styles.cardHeader}>
              <span className={styles.windowTitle}>output_ats.json</span>
              {status === 'success' && (
                <button onClick={copyToClipboard} className={styles.copyBtn} title="Copiar JSON">
                  {copied ? <Check size={16} color="#27c93f" /> : <Copy size={16} />}
                </button>
              )}
            </div>

            <div className={styles.resultBody}>
              {status === 'idle' && (
                <div className={styles.emptyState}>
                  <div className={styles.radarContainer}>
                    <div className={styles.radar}></div>
                  </div>
                  <p>Esperando datos de entrada...</p>
                  <ul className={styles.featureList}>
                    <li><CheckCircle size={14} className={styles.checkIcon}/> Reescritura Método STAR</li>
                    <li><CheckCircle size={14} className={styles.checkIcon}/> Inyección de Verbos de Acción</li>
                    <li><CheckCircle size={14} className={styles.checkIcon}/> Formato JSON Estricto</li>
                  </ul>
                </div>
              )}

              {status === 'processing' && (
                <div className={styles.processingState}>
                  <div className={styles.hologram}></div>
                  <div className={styles.progressContainer}>
                    <div className={styles.progressBar}></div>
                  </div>
                  <p className={styles.processingText}>Generando viñetas de alto impacto...</p>
                </div>
              )}

              {status === 'success' && result && (
                <div className={styles.jsonOutput}>
                  <pre>
                    <code>
<span className={styles.jsonPunctuation}>{"{"}</span>
{"\n  "}<span className={styles.jsonKey}>"perfil_profesional"</span><span className={styles.jsonPunctuation}>: </span><span className={styles.jsonString}>"{result.perfil_profesional}"</span><span className={styles.jsonPunctuation}>,</span>
{"\n  "}<span className={styles.jsonKey}>"experiencia_optimizada"</span><span className={styles.jsonPunctuation}>: [</span>
{result.experiencia_optimizada.map((item, index) => (
  <span key={index}>
    {"\n    "}<span className={styles.jsonString}>"{item}"</span>{index < result.experiencia_optimizada.length - 1 ? <span className={styles.jsonPunctuation}>,</span> : ""}
  </span>
))}
{"\n  "}<span className={styles.jsonPunctuation}>]</span>
{"\n"}<span className={styles.jsonPunctuation}>{"}"}</span>
                    </code>
                  </pre>
                </div>
              )}
            </div>
            
            {status === 'success' && (
              <div className={styles.resultFooter}>
                <button onClick={() => setStatus('idle')} className={styles.resetBtn}>
                  Procesar Nuevo Perfil
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResumeOptimizer;
