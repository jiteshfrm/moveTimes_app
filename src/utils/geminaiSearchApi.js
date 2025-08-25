import { GoogleGenAI } from "@google/genai";
const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
export const ai = new GoogleGenAI({apiKey: apiKey});

export const suggestedMovies = async(inputRef) => {
    const querySearch = `Act as a Movie Recommendation System and suggest some movies for the query ${inputRef}. Only give me names of 5 movies, comma seperated Like the example result given ahead. Example Result: Gadar, sholay, Don, Goalmaal, Koi Mil Gaya`
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: querySearch,
    })
    return response.text;
}