package com.criptografia.criptografia;

import com.criptografia.criptografia.GeradorRSAKey;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.crypto.Cipher;
import java.nio.charset.StandardCharsets;
import java.util.Base64;

@Service
public class EncpritarService {

    private final GeradorRSAKey rsaKeyGenerator;

    @Autowired
    public EncpritarService(GeradorRSAKey rsaKeyGenerator) {
        this.rsaKeyGenerator = rsaKeyGenerator;
    }

    public String encriptar(String message) throws Exception {
        Cipher cipher = Cipher.getInstance("RSA");
        cipher.init(Cipher.ENCRYPT_MODE, rsaKeyGenerator.getPublicKey());
        byte[] encrypted = cipher.doFinal(message.getBytes(StandardCharsets.UTF_8));
        return Base64.getEncoder().encodeToString(encrypted);
    }

    public String decriptar(String encryptedMessage) throws Exception {
        Cipher cipher = Cipher.getInstance("RSA");
        cipher.init(Cipher.DECRYPT_MODE, rsaKeyGenerator.getPrivateKey());
        byte[] decrypted = cipher.doFinal(Base64.getDecoder().decode(encryptedMessage));
        return new String(decrypted, StandardCharsets.UTF_8);
    }
}
