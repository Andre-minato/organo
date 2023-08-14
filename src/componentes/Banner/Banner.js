import './Banner.css'

function Banner(){
    // JSX como React trabalha com a parte visual (Ele vai entender essa imagem e fazer o appending no Dom)
    return (
        <header className="banner">
            <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>
        </header>
    )
}

export default Banner