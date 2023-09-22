import { News } from '@/types/news';
import { api } from '../../api';

export const newsDniproApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Dnipro
    getAllDniproNews: builder.query<News[], void>({
      query: () => ({
        url: '/dnipro/news',
        method: 'GET',
      }),
    }),
    getDniproNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/dnipro/news/${id}`,
        method: 'GET',
      }),
    }),
    editDniproNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/dnipro/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeDniproNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/dnipro/news/delete/${id}`,
        method: 'POST',
      }),
    }),
    // Kamianske
    getAllKamianskeNews: builder.query<News[], void>({
      query: () => ({
        url: '/kamianske/news',
        method: 'GET',
      }),
    }),
    getKamianskeNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/kamianske/news/${id}`,
        method: 'GET',
      }),
    }),
    editKamianskeNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/kamianske/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeKamianskeNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/kamianske/news/delete/${id}`,
        method: 'POST',
      }),
    }),
    // KryvyiRih
    getAllKryvyiRihNews: builder.query<News[], void>({
      query: () => ({
        url: '/kryvyi-rih/news',
        method: 'GET',
      }),
    }),
    getKryvyiRihNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/kryvyi-rih/news/${id}`,
        method: 'GET',
      }),
    }),
    editKryvyiRihNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/kryvyi-rih/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeKryvyiRihNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/kryvyi-rih/news/delete/${id}`,
        method: 'POST',
      }),
    }),
    // Marganets
    getAllMarganetsNews: builder.query<News[], void>({
      query: () => ({
        url: '/marganets/news',
        method: 'GET',
      }),
    }),
    getMarganetsNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/marganets/news/${id}`,
        method: 'GET',
      }),
    }),
    editMarganetsNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/marganets/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeMarganetsNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/marganets/news/delete/${id}`,
        method: 'POST',
      }),
    }),
    // Nikopol
    getAllNikopolNews: builder.query<News[], void>({
      query: () => ({
        url: '/nikopol/news',
        method: 'GET',
      }),
    }),
    getNikopolNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/nikopol/news/${id}`,
        method: 'GET',
      }),
    }),
    editNikopolNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/nikopol/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeNikopolNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/nikopol/news/delete/${id}`,
        method: 'POST',
      }),
    }),
    // Novomoskovsk
    getAllNovomoskovskNews: builder.query<News[], void>({
      query: () => ({
        url: '/novomoskovsk/news',
        method: 'GET',
      }),
    }),
    getNovomoskovskNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/novomoskovsk/news/${id}`,
        method: 'GET',
      }),
    }),
    editNovomoskovskNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/novomoskovsk/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeNovomoskovskNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/novomoskovsk/news/delete/${id}`,
        method: 'POST',
      }),
    }),
    // Pavlograd
    getAllPavlogradNews: builder.query<News[], void>({
      query: () => ({
        url: '/pavlograd/news',
        method: 'GET',
      }),
    }),
    getPavlogradNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/pavlograd/news/${id}`,
        method: 'GET',
      }),
    }),
    editPavlogradNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/pavlograd/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removePavlogradNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/pavlograd/news/delete/${id}`,
        method: 'POST',
      }),
    }),
    // Pershotravensk
    getAllPershotravenskNews: builder.query<News[], void>({
      query: () => ({
        url: '/pershotravensk/news',
        method: 'GET',
      }),
    }),
    getPershotravenskNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/pershotravensk/news/${id}`,
        method: 'GET',
      }),
    }),
    editPershotravenskNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/pershotravensk/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removePershotravenskNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/pershotravensk/news/delete/${id}`,
        method: 'POST',
      }),
    }),
    // Pokrov
    getAllPokrovNews: builder.query<News[], void>({
      query: () => ({
        url: '/pokrov/news',
        method: 'GET',
      }),
    }),
    getPokrovNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/pokrov/news/${id}`,
        method: 'GET',
      }),
    }),
    editPokrovNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/pokrov/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removePokrovNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/pokrov/news/delete/${id}`,
        method: 'POST',
      }),
    }),
    // Pyatihatky
    getAllPyatihatkyNews: builder.query<News[], void>({
      query: () => ({
        url: '/pyatihatky/news',
        method: 'GET',
      }),
    }),
    getPyatihatkyNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/pyatihatky/news/${id}`,
        method: 'GET',
      }),
    }),
    editPyatihatkyNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/pyatihatky/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removePyatihatkyNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/pyatihatky/news/delete/${id}`,
        method: 'POST',
      }),
    }),
    // Sinelnikovo
    getAllSinelnikovoNews: builder.query<News[], void>({
      query: () => ({
        url: '/sinelnikovo/news',
        method: 'GET',
      }),
    }),
    getSinelnikovoNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/sinelnikovo/news/${id}`,
        method: 'GET',
      }),
    }),
    editSinelnikovoNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/sinelnikovo/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeSinelnikovoNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/sinelnikovo/news/delete/${id}`,
        method: 'POST',
      }),
    }),
    // Ternivka
    getAllTernivkaNews: builder.query<News[], void>({
      query: () => ({
        url: '/ternivka/news',
        method: 'GET',
      }),
    }),
    getTernivkaNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/ternivka/news/${id}`,
        method: 'GET',
      }),
    }),
    editTernivkaNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/ternivka/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeTernivkaNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/ternivka/news/delete/${id}`,
        method: 'POST',
      }),
    }),
    // Vilnohorsk
    getAllVilnohorskNews: builder.query<News[], void>({
      query: () => ({
        url: '/vilnohorsk/news',
        method: 'GET',
      }),
    }),
    getVilnohorskNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/vilnohorsk/news/${id}`,
        method: 'GET',
      }),
    }),
    editVilnohorskNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/vilnohorsk/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeVilnohorskNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/vilnohorsk/news/delete/${id}`,
        method: 'POST',
      }),
    }),
    // ZhovtiVody
    getAllZhovtiVodyNews: builder.query<News[], void>({
      query: () => ({
        url: '/zhovti-vody/news',
        method: 'GET',
      }),
    }),
    getZhovtiVodyNewsById: builder.query<News, string>({
      query: (id) => ({
        url: `/zhovti-vody/news/${id}`,
        method: 'GET',
      }),
    }),
    editZhovtiVodyNewsById: builder.mutation<string, News>({
      query: (news) => ({
        url: `/zhovti-vody/news/edit/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    removeZhovtiVodyNews: builder.mutation<string, string>({
      query: (id) => ({
        url: `/zhovti-vody/news/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  // Dnipro
  useGetAllDniproNewsQuery,
  useGetDniproNewsByIdQuery,
  useEditDniproNewsByIdMutation,
  useRemoveDniproNewsMutation,
  // Kamianske
  useGetAllKamianskeNewsQuery,
  useGetKamianskeNewsByIdQuery,
  useEditKamianskeNewsByIdMutation,
  useRemoveKamianskeNewsMutation,
  // KryvyiRih
  useGetAllKryvyiRihNewsQuery,
  useGetKryvyiRihNewsByIdQuery,
  useEditKryvyiRihNewsByIdMutation,
  useRemoveKryvyiRihNewsMutation,
  // Marganets
  useGetAllMarganetsNewsQuery,
  useGetMarganetsNewsByIdQuery,
  useEditMarganetsNewsByIdMutation,
  useRemoveMarganetsNewsMutation,
  // Nikopol
  useGetAllNikopolNewsQuery,
  useGetNikopolNewsByIdQuery,
  useEditNikopolNewsByIdMutation,
  useRemoveNikopolNewsMutation,
  // Novomoskovsk
  useGetAllNovomoskovskNewsQuery,
  useGetNovomoskovskNewsByIdQuery,
  useEditNovomoskovskNewsByIdMutation,
  useRemoveNovomoskovskNewsMutation,
  // Pavlograd
  useGetAllPavlogradNewsQuery,
  useGetPavlogradNewsByIdQuery,
  useEditPavlogradNewsByIdMutation,
  useRemovePavlogradNewsMutation,
  // Pershotravensk
  useGetAllPershotravenskNewsQuery,
  useGetPershotravenskNewsByIdQuery,
  useEditPershotravenskNewsByIdMutation,
  useRemovePershotravenskNewsMutation,
  // Pokrov
  useGetAllPokrovNewsQuery,
  useGetPokrovNewsByIdQuery,
  useEditPokrovNewsByIdMutation,
  useRemovePokrovNewsMutation,
  // Pyatihatky
  useGetAllPyatihatkyNewsQuery,
  useGetPyatihatkyNewsByIdQuery,
  useEditPyatihatkyNewsByIdMutation,
  useRemovePyatihatkyNewsMutation,
  // Sinelnikovo
  useGetAllSinelnikovoNewsQuery,
  useGetSinelnikovoNewsByIdQuery,
  useEditSinelnikovoNewsByIdMutation,
  useRemoveSinelnikovoNewsMutation,
  // Ternivka
  useGetAllTernivkaNewsQuery,
  useGetTernivkaNewsByIdQuery,
  useEditTernivkaNewsByIdMutation,
  useRemoveTernivkaNewsMutation,
  // Vilnohorsk
  useGetAllVilnohorskNewsQuery,
  useGetVilnohorskNewsByIdQuery,
  useEditVilnohorskNewsByIdMutation,
  useRemoveVilnohorskNewsMutation,
  // ZhovtiVody
  useGetAllZhovtiVodyNewsQuery,
  useGetZhovtiVodyNewsByIdQuery,
  useEditZhovtiVodyNewsByIdMutation,
  useRemoveZhovtiVodyNewsMutation,
} = newsDniproApi;

export const {
  endpoints: {
    // Dnipro
    getAllDniproNews,
    getDniproNewsById,
    editDniproNewsById,
    removeDniproNews,
    // Kamianske
    getAllKamianskeNews,
    getKamianskeNewsById,
    editKamianskeNewsById,
    removeKamianskeNews,
    // KryvyiRih
    getAllKryvyiRihNews,
    getKryvyiRihNewsById,
    editKryvyiRihNewsById,
    removeKryvyiRihNews,
    // Marganets
    getAllMarganetsNews,
    getMarganetsNewsById,
    editMarganetsNewsById,
    removeMarganetsNews,
    // Nikopol
    getAllNikopolNews,
    getNikopolNewsById,
    editNikopolNewsById,
    removeNikopolNews,
    // Novomoskovsk
    getAllNovomoskovskNews,
    getNovomoskovskNewsById,
    editNovomoskovskNewsById,
    removeNovomoskovskNews,
    // Pavlograd
    getAllPavlogradNews,
    getPavlogradNewsById,
    editPavlogradNewsById,
    removePavlogradNews,
    // Pershotravensk
    getAllPershotravenskNews,
    getPershotravenskNewsById,
    editPershotravenskNewsById,
    removePershotravenskNews,
    // Pokrov
    getAllPokrovNews,
    getPokrovNewsById,
    editPokrovNewsById,
    removePokrovNews,
    // Pyatihatky
    getAllPyatihatkyNews,
    getPyatihatkyNewsById,
    editPyatihatkyNewsById,
    removePyatihatkyNews,
    // Sinelnikovo
    getAllSinelnikovoNews,
    getSinelnikovoNewsById,
    editSinelnikovoNewsById,
    removeSinelnikovoNews,
    // Ternivka
    getAllTernivkaNews,
    getTernivkaNewsById,
    editTernivkaNewsById,
    removeTernivkaNews,
    // Vilnohorsk
    getAllVilnohorskNews,
    getVilnohorskNewsById,
    editVilnohorskNewsById,
    removeVilnohorskNews,
    // ZhovtiVody
    getAllZhovtiVodyNews,
    getZhovtiVodyNewsById,
    editZhovtiVodyNewsById,
    removeZhovtiVodyNews,
  },
} = newsDniproApi;
