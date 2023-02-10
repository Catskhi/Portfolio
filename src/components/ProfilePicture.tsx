export function ProfilePicture() {
    return (
        <div className='
            h-[175px] w-[175px] rounded-[100%]
            lg:ml-[-10%]
            lg:h-[250px]
            lg:w-[250px]
            border-2 border-cyan-400
            bg-no-repeat bg-cover
            transition-all duration-300
        '
        style={{
            backgroundImage: 'url(src/assets/Foto_de_perfil2.png)'
        }}>
            
        </div>
    )
}