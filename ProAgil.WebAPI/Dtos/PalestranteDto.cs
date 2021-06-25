using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProAgil.WebAPI.Dtos
{
    public class PalestranteDto
    {
        public int Id { get; set; }

        [Required(ErrorMessage ="O campo {0} é obrigatório")]
        public string Nome { get; set; }

        [Required(ErrorMessage ="O campo {0} é obrigatório")]
        public string Descricao { get; set; }

        public string ImagemURL { get; set; }

        [Phone(ErrorMessage ="Insira um telefone válido!")]
        public string Telefone { get; set; }

        [EmailAddress(ErrorMessage ="Insira um email válido!")]
        public string Email { get; set; }

        public List<RedeSocialDto> RedesSociais { get; set; }
        public List<EventoDto> Evento { get; set; }
    }
}