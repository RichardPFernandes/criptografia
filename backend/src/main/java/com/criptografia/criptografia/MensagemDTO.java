package com.criptografia.criptografia;

public class MensagemDTO {

        private String mensagem;

        public MensagemDTO() {
        }

        public MensagemDTO(String mensagem) {
            this.mensagem = mensagem;
        }

        public String getMensagem() {
            return mensagem;
        }

        public void setMensagem(String mensagem) {
            this.mensagem = mensagem;
        }
}
