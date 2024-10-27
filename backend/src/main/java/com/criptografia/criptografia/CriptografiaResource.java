package com.criptografia.criptografia;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class CriptografiaResource {

    @Autowired
    private EncpritarService encpritarService;

    @PostMapping("/encriptar")
    public String encripitar(@RequestBody MensagemDTO mensagem) throws Exception {
        return encpritarService.encriptar(mensagem.getMensagem());
    }

    @PostMapping("/decriptar")
    public String descriptar(@RequestBody MensagemDTO mensagemDTO) throws Exception {
        return encpritarService.decriptar(mensagemDTO.getMensagem());
    }
}
