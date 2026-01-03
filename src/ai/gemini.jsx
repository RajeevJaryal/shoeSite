export const generateDescription = async (shoeName) => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_KEY}`, // Vite env variable
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Write a short professional product description for shoes named ${shoeName}. Keep it under 30 words.`,
          },
        ],
        temperature: 0.7,
        max_tokens: 60, // limit the output length
      }),
    });

    const data = await response.json();
    console.log("OpenAI response:", data);

    // Return the generated description
    return data.choices?.[0]?.message?.content || "Premium quality shoes designed for comfort and everyday use.";
  } catch (error) {
    console.error("Error generating description:", error);
    return "Premium quality shoes designed for comfort and everyday use.";
  }
};
