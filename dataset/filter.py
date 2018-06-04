import pandas as pd
data = pd.read_csv('flights.csv', sep='\t')
data.dropna().to_csv('flights.csv')