import openai

# Set your OpenAI API key here
#openai.api_key = #****************# 

def get_chatgpt_response(prompt, model="text-davinci-003"):
    """
    Send a prompt to the ChatGPT API and return the response.
    """
    try:
        response = openai.Completion.create(
            model=model,
            prompt=prompt,
            temperature=0.7,
            max_tokens=150
        )
        return response.choices[0].text.strip()
    except Exception as e:
        print(f"An error occurred: {e}")
        return "I'm sorry, I couldn't fetch a response."
    
def get_mathematics_response(user_query):
    prompt = f"As a mathematics tutor, {user_query}"
    return get_chatgpt_response(prompt)

def get_physics_response(user_query):
    prompt = f"As a physics expert, {user_query}"
    return get_chatgpt_response(prompt)

def get_chemistry_response(user_query):
    prompt = f"As a chemistry teacher, {user_query}"
    return get_chatgpt_response(prompt)

def get_biology_response(user_query):
    prompt = f"As a biologist, {user_query}"
    return get_chatgpt_response(prompt)

def get_computer_science_response(user_query):
    prompt = f"As a software engineer, {user_query}"
    return get_chatgpt_response(prompt)

# Example usage
response = get_physics_response("Explain Newton's laws of motion")
response2 = get_physics_response("Explain Einstein's theory of relativity")
response = get_computer_science_response("what are the most important object orieneted programming principles I should know as a student")
print(response)
print(response)
print(response2)
