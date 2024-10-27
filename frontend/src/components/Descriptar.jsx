import { useState } from 'react';
import { decriptarMensagem } from '../api';

const Decriptar = () => {
    const [mensagemEncriptada, setmensagemEncriptada] = useState('');
    const [decriptada, setdecriptada] = useState('');

    const handleDecrypt = async (e) => {
        e.preventDefault();
        try {
            const result = await decriptarMensagem(mensagemEncriptada);
            setdecriptada(result);
        } catch (error) {
            console.error('Erro ao descriptar mensagem:', error);
        }
    };

    return (
        <div>
            <h2>Descriptar Mensagem</h2>
            <form onSubmit={handleDecrypt}>
                <textarea
                    value={mensagemEncriptada}
                    onChange={(e) => setmensagemEncriptada(e.target.value)}
                    placeholder="Digite a mensagem para descriptar"
                />
                <button type="enviar">Decrypt</button>
            </form>
            {decriptada && (
                <div className="resultado">
                    <h3>Mensagem Decriptada:</h3>
                    <p>{decriptada}</p>
                </div>
            )}
        </div>
    );
};

export default Decriptar;
