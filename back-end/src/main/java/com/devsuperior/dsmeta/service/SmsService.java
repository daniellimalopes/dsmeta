package com.devsuperior.dsmeta.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entity.SalesEntity;
import com.devsuperior.dsmeta.repository.SalesRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Service
public class SmsService {
	
	@Autowired
	private SalesRepository salesRepository;

	@Value("${twilio.sid}")
	private String twilioSid;

	@Value("${twilio.key}")
	private String twilioKey;

	@Value("${twilio.phone.from}")
	private String twilioPhoneFrom;

	@Value("${twilio.phone.to}")
	private String twilioPhoneTo;

	public void sendSms(Integer id) {

		SalesEntity salesEntity = salesRepository.findById(id).get();
		
		String date = salesEntity.getData().getMonthValue() + "/" + salesEntity.getData().getYear();
		
		String msg = "O Vendedor " + salesEntity.getVendedor() + " foi destaque em " + date + " com total de R$ " + String.format("%.2f", salesEntity.getTotal());
				
		Twilio.init(twilioSid, twilioKey);

		PhoneNumber to = new PhoneNumber(twilioPhoneTo);
		PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

		Message message = Message.creator(to, from, msg).create();

		System.out.println(message.getSid());
	}
}
