using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProAgil.Domain;

namespace ProAgil.Repository
{
    public class ProAgilRepository : IProAgilRepository
    {
        public ProAgilContext _context { get; }
        public ProAgilRepository(ProAgilContext context)
        {
            _context = context;
            _context.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
        }

        //Gerais
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public void DeleteRange<T>(T[] entityArray) where T : class
        {
            _context.RemoveRange(entityArray);
        }

        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync() > 0);
        }

        //Evento
        public async Task<Evento[]> GetAllEventoAsync(bool includePalestrantes = false)
        {
            IQueryable<Evento> query = _context.Eventos
            .Include(x => x.Lotes)
            .Include(x => x.RedesSociais);

            if (includePalestrantes)
            {
                query = query
                .Include(x => x.PalestrantesEventos)
                .ThenInclude(x => x.Palestrante);
            }

            query = query.AsNoTracking()
            .OrderByDescending(x => x.DataEvento);

            return await query.ToArrayAsync();
        }

        public async Task<Evento> GetEventoAsyncById(int EventoId, bool includePalestrantes)
        {
            IQueryable<Evento> query = _context.Eventos
                .Include(c => c.Lotes)
                .Include(c => c.RedesSociais);

            if (includePalestrantes)
            {
                query = query
                    .Include(pe => pe.PalestrantesEventos)
                    .ThenInclude(p => p.Palestrante);
            }

            query = query
                        .AsNoTracking()
                        .OrderBy(c => c.Id)
                        .Where(c => c.Id == EventoId);

            return await query.FirstOrDefaultAsync();
        }

        public async Task<Evento[]> GetAllEventoAsyncByTema(string tema, bool includePalestrantes = false)
        {
            IQueryable<Evento> query = _context.Eventos
            .Include(x => x.Lotes)
            .Include(x => x.RedesSociais);

            if (includePalestrantes)
            {
                query = query
                .Include(x => x.PalestrantesEventos)
                .ThenInclude(x => x.Palestrante);
            }

            query = query.AsNoTracking()
            .OrderByDescending(x => x.DataEvento)
            .Where(x => x.Tema.ToLower().Contains(tema.ToLower()));

            return await query.ToArrayAsync();
        }

        public async Task<Palestrante> GetAllPalestranteAsyncById(int PalestranteId, bool includeEventos = false )
        {
            IQueryable<Palestrante> query = _context.Palestrantes
            .Include(x => x.RedesSociais);

            if (includeEventos)
            {
                query = query
                .Include(x => x.PalestrantesEventos)
                .ThenInclude(x => x.Evento);
            }

            query = query.AsNoTracking()
            .Where(x => x.Id == PalestranteId);

            return await query.FirstOrDefaultAsync();
        }

        public async Task<Palestrante[]> GetAllPalestranteAsyncByName(string name, bool includeEventos = false)
        {
            IQueryable<Palestrante> query = _context.Palestrantes
            .Include(x => x.RedesSociais);

            if (includeEventos)
            {
                query = query
                .Include(x => x.PalestrantesEventos)
                .ThenInclude(x => x.Evento);
            }

            query = query.AsNoTracking()
            .Where(x => x.Nome.ToLower().Contains(name.ToLower()));

            return await query.ToArrayAsync();
        }
    }
}