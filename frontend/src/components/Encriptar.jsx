import { useState } from 'react';
import { encriptarMensagem } from '../api';

const Encriptar = () => {
    const [mensagem, setMensagem] = useState('');
    const [encriptada, setEncriptada] = useState('');

    const handleEncrypt = async (e) => {
        e.preventDefault();
        try {
            const resultado = await encriptarMensagem(mensagem);
            setEncriptada(resultado);
        } catch (error) {
            console.error('Erro ao encriptar mensagem:', error);
        }
    };

    return (
        <div>
            <h2>Encrypt mensagem</h2>
            <form onSubmit={handleEncrypt}>
                <textarea
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Digite a mensagem para encriptar"
                />
                <button type="enviar">Encriptar</button>
            </form>
            {encriptada && (
                <div className="resultado">
                    <h3>Mensagem Encriptada:</h3>
                    <p>{encriptada}</p>
                </div>
            )}
        </div>
    );
};

export default Encriptar;
