using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProAgil.WebAPI.Dtos
{
    public class EventoDto
    {
        public int Id { get; set; }

        [Required(ErrorMessage ="O campo {0} é obrigatório")]
        [StringLength (100, MinimumLength=3, ErrorMessage="Local é entre 3 e 100 Caracters")]
        public string Local { get; set; }

        [Required(ErrorMessage ="O campo {0} é obrigatório")]
        public DateTime DataEvento { get; set; }

        [Required(ErrorMessage ="O campo {0} é obrigatório")]
        public string Tema { get; set; }

        [Required(ErrorMessage ="O campo {0} é obrigatório")]
        [Range(2, 120000, ErrorMessage="Quatidade de Pessoas é entre 2 e 120000")]
        public int QtdPessoas { get; set; }

        public string ImagemURL { get; set; }

        [Phone(ErrorMessage ="Insira um telefone válido!")]
        public string Telefone { get; set; }

        [EmailAddress(ErrorMessage ="Insira um email válido!")]
        public string Email { get; set; }

        public List<LoteDto> Lotes { get; set; }
        public List<RedeSocialDto> RedesSociais { get; set; }
        public List<PalestranteDto> Palestrantes { get; set; }
    }
}