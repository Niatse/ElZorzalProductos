import styles from '../styles.module.css'

import App from '../components/App.js';

import Image from 'next/image'



 
export default function Home() {
  
  return (
    
    <div className="html">
       <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
        overflow-x: hidden;
        
      }
      html{
        scroll-behavior: smooth;
        overflow-x: hidden;
      }
    `}</style>
      <head>
        <title>El Zorzal Productos de limpieza</title>

        <meta
         name="description" content="Productos de limpieza para el cuidado del hogar,detergentes,perfumoles,multiusos y solucion blanqueadora,calidad y economia al alcance de su mano."
        />
        <meta charSet="UTF-8"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"
        />
       <meta name="keywords" content="Productos de limpeza, Limpieza, Detergente, Jabon, Multiuso,El Zorzal"
        />
        <meta name="robots" content="index"/>
        <meta name="google-site-verification" content="4gHtY5QVb0_uijPBY047FuV9BP0SuiM6rKMbEppZV3A" />
        <link rel="icon" href="/favicon.ico" />
      </head>
    
      <App />
      <section id="home">
           <h1 className={styles.titulo}>
           El Zorzal Productos de limpieza
          
         </h1>
          <p className={styles.subtitulo}>Venta de detergente, multiuso, perfumol y solución blanqueadora <br/>Calidad y economía al alcance de su mano</p>
      </section>

      <section id="productos">
          <h2 className={styles.titulo}>Nuestros productos:</h2>
        <div className={styles.card}>
            <Image className={styles.img} src="/detergente.png" alt="Detergente"   width={300}
      height={300}  />
            <h2 className={styles.prod}>Detergente</h2>
            
            <p className={styles.description}>Detergente liquido...</p>
            <p><button>$250</button></p>
          </div>

          <div className={styles.card}>
            <Image className={styles.img} src="/detergente.png" alt="Detergente"   width={300}
      height={300}  />
            <h2 className={styles.prod}>Detergente</h2>
            
            <p className={styles.description}>Detergente liquido...</p>
            <p><button>$250</button></p>
          </div>


          <div className={styles.card}>
            <Image className={styles.img} src="/detergente.png" alt="Detergente"   width={300}
      height={300}  />
            <h2 className={styles.prod}>Detergente</h2>
            
            <p className={styles.description}>Detergente liquido...</p>
            <p><button>$250</button></p>
          </div>




          <div className={styles.card}>
            <Image className={styles.img} src="/detergente.png" alt="Detergente"   width={300}
      height={300}  />
            <h2 className={styles.prod}>Detergente</h2>
            
            <p className={styles.description}>Detergente liquido...</p>
            <p><button>$250</button></p>
          </div>



          <div className={styles.card}>
            <Image className={styles.img} src="/detergente.png" alt="Detergente"   width={300}
      height={300}  />
            <h2 className={styles.prod}>Detergente</h2>
            
            <p className={styles.description}>Detergente liquido...</p>
            <p><button>$250</button></p>
          </div>



          <div className={styles.card}>
            <Image className={styles.img} src="/detergente.png" alt="Detergente"   width={300}
      height={300}  />
            <h2 className={styles.prod}>Detergente</h2>
            
            <p className={styles.description}>Detergente liquido...</p>
            <p><button>$250</button></p>
          </div>

       </section>
 

       <section id="Acerca de">
       <h2 className={styles.titulo}>Contacto:</h2>
       <h2 className={styles.subtitulo}>
           Tel: 23125298<br/>
           Email: Elzorzalproductos@adinet.com.uy
       </h2>
      </section>
      
      <section>
       <div className={styles.footer}>
         <h2 className={styles.footerText}>El Zorzal</h2>
       </div>
     </section>
  
    </div>

  )    
}