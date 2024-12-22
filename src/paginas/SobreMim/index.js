import styles from "./SobreMim.module.css"
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.png"

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim..."
        >
            <h3
                className={styles.subtitulo}
            >
                Olá, eu sou o blogueiro!
            </h3>
            <img src={fotoSobreMim} alt="Foto sobre mim" className={styles.fotoSobreMim} />
            <p className={styles.paragrafo}>
                O profissional de Tecnologia da Informação (TI) que atua como desenvolvedor de sistemas web desempenha um papel fundamental no cenário digital atual. Com habilidades em front-end, back-end, UX (User Experience) e UI (User Interface), ele é responsável por criar aplicações interativas e funcionais que atendam às demandas de empresas e usuários. Além disso, ao integrar conhecimentos em Python e ciência de dados, este profissional expande suas capacidades, tornando-se um pesquisador e solucionador de problemas complexos em um mundo movido por dados.
            </p>
            <p className={styles.paragrafo}>
                Na camada de front-end, o desenvolvedor trabalha diretamente com a interface visual das aplicações. Essa área envolve o uso de linguagens como HTML, CSS e JavaScript, além de frameworks modernos como React ou Angular. A principal preocupação no front-end é garantir que o design seja atraente, responsivo e fácil de usar. O foco na experiência do usuário (UX) e na interface intuitiva (UI) é essencial para conquistar a satisfação do público.
            </p>
            <p className={styles.paragrafo}>
                Já o back-end é a camada responsável pelo processamento lógico e pela interação com bancos de dados e servidores. Nesse contexto, o profissional utiliza linguagens como Python, Node.js, Ruby ou Java para desenvolver funcionalidades robustas e seguras. A integração entre o front-end e o back-end é crucial para o funcionamento harmonioso dos sistemas, exigindo uma comunicação eficiente entre ambas as partes.
            </p>
            <p className={styles.paragrafo}>
                A experiência em UX e UI complementa as habilidades técnicas do desenvolvedor, permitindo que ele projete sistemas não apenas funcionais, mas também agradáveis e intuitivos. Com base em estudos de comportamento humano e análise de dados, o profissional é capaz de criar soluções que antecipam as necessidades dos usuários e reduzem frustrações no uso do software. Isso é especialmente importante em um mercado cada vez mais competitivo, onde a experiência do cliente pode determinar o sucesso de uma aplicação.
            </p>
            <p className={styles.paragrafo}>
                Quando se trata de ciência de dados, o uso de Python como ferramenta principal é um diferencial. O desenvolvedor-pesquisador é capaz de lidar com grandes volumes de dados, realizar análises estatísticas, construir modelos preditivos e extrair insights valiosos para as empresas. Frameworks como Pandas, NumPy e TensorFlow, combinados com visualização de dados em bibliotecas como Matplotlib e Seaborn, tornam possível transformar dados brutos em informações estratégicas.
            </p>
            <p className={styles.paragrafo}>
                Finalmente, ao reunir essas competências diversificadas, o profissional de TI se torna um especialista completo, apto a liderar projetos inovadores e contribuir de forma significativa para o avanço tecnológico. A combinação de habilidades técnicas, criatividade e conhecimento analítico posiciona esse profissional como um elemento indispensável no mercado atual, onde a transformação digital é uma prioridade para organizações de todos os setores.
            </p>
        </PostModelo>
    )
}