import styles from '../styles.module.css'

import App from '../components/App.js';

import Image from 'next/image'

import Head from 'next/head'


 
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
      <Head>
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
      </Head>
    
      <App />
      <section id="home">
           <h1 className={styles.titulo}>
           El Zorzal Productos de limpieza
          
         </h1>
          <p className={styles.subtitulo}>Venta de detergente, multiuso, perfumol y solución blanqueadora <br/>Calidad y economía al alcance de su mano
          <br/>Entregamos a empresas, oficinas, hogares, etc. <br/>
          Por compras mayores a $600 envíos gratis

</p>
      </section>

      <section id="productos"><h2 className={styles.titulo}>Nuestros productos:</h2>
        <div className={styles.cards}>

        
          
        <div className={styles.card}>
            <Image className={styles.img} src="/deter_limon.png" alt="DetergenteLimon"   width={400}
      height={400}  />
            <h2 className={styles.prod}>Detergente Limón</h2>
            
            <p className={styles.description}>Detergente liquido lavavajillas,  en sus diferentes variedades Clasico,Limón y Aloe</p>
            <p className={styles.precio}><button>5LT $220 10LT $390</button></p>
          </div>

          <div className={styles.card}>
            <Image className={styles.img} src="/deter_concentrado.png" alt="DetergenteConcentrado"   width={400}
      height={400}  />
            <h2 className={styles.prod}>Detergente Concentrado</h2>
            
            <p className={styles.description}>Detergente liquido lavavajillas,  en sus diferentes variedades Clasico,Limón y Aloe</p>
            <p className={styles.precio}><button>5LT $260 10LT $490</button></p>
          </div>


          <div className={styles.card}>
            <Image className={styles.img} src="/detergente.png" alt="Detergente"   width={300}
      height={300}  />
            <h2 className={styles.prod}>Detergente</h2>
            
            <p className={styles.description}>Detergente liquido...</p>
            <p><button>$250</button></p>
          </div>




          <div className={styles.card}>
            <Image className={styles.img} src="/hipoclorito.png" alt="hipoclorito"   width={400}
      height={400}  />
            <h2 className={styles.prod}>Hipoclorito de Sodio</h2>
            
            <p className={styles.description}>Detergente liquido lavavajillas,  en sus diferentes variedades Clasico,Limón y Aloe</p>
            <p className={styles.precio}><button>5LT $200 10LT $360</button></p>
          </div>


          <div className={styles.card}>
            <Image className={styles.img} src="/limpiador_liq_multiuso.png" alt="LiquidoMultiuso"   width={400}
      height={400}  />
            <h2 className={styles.prod}>Limpiador Líquido Multiuso</h2>
            
            <p className={styles.description}>Detergente liquido lavavajillas,  en sus diferentes variedades Clasico,Limón y Aloe</p>
            <p className={styles.precio}><button>5LT $220 10LT $390</button></p>
          </div>



          <div className={styles.card}>
            <Image className={styles.img} src="/suavizante_sensacion.png" alt="suavizante"   width={400}
      height={400}  />
            <h2 className={styles.prod}>Suavizante Sensación</h2>
            
            <p className={styles.description}>Detergente liquido lavavajillas,  en sus diferentes variedades Clasico,Limón y Aloe</p>
            <p className={styles.precio}><button>5LT $220 10LT $380</button></p>
          </div>

          </div>
       </section>
 

       <section id="Acerca de">
       <h2 className={styles.titulo}>Contacto:</h2>
       <h2 className={styles.subtitulo}>
       <a className={styles.llamar} href="tel:+59897043724">Telefono De Contacto</a><br/>
       <a className={styles.llamar} href="mailto:elzorzal@adinet.com.uy">Email</a>

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


