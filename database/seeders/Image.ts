import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Image from 'App/Models/Image'

export default class extends BaseSeeder {
  public async run() {
    await Image.createMany([
      {
        image_url:
          'https://oaidalleapiprodscus.blob.core.windows.net/private/org-Fb4GKMjZ3sTcpzymhOMQdMNo/user-ge3m8nCriN0puU81b7GheZ0q/img-9nXsTM85cIBc9FjjQBNKLS4Q.png?st=2023-02-04T09%3A12%3A13Z&se=2023-02-04T11%3A12%3A13Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-02-03T21%3A11%3A50Z&ske=2023-02-04T21%3A11%3A50Z&sks=b&skv=2021-08-06&sig=N7t8Ih%2Bhq8%2BnREUQOKpfmjt9H6bwlc03LA3JpjoPo9c%3D',
        user_id: 1,
        file: 'my-image',
        file_type: 'jpeg',
      },
      {
        image_url:
          'https://oaidalleapiprodscus.blob.core.windows.net/private/org-Fb4GKMjZ3sTcpzymhOMQdMNo/user-ge3m8nCriN0puU81b7GheZ0q/img-9nXsTM85cIBc9FjjQBNKLS4Q.png?st=2023-02-04T09%3A12%3A13Z&se=2023-02-04T11%3A12%3A13Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-02-03T21%3A11%3A50Z&ske=2023-02-04T21%3A11%3A50Z&sks=b&skv=2021-08-06&sig=N7t8Ih%2Bhq8%2BnREUQOKpfmjt9H6bwlc03LA3JpjoPo9c%3D',
        user_id: 2,
        file: 'bhutt34',
        file_type: 'jpeg',
      },
      {
        image_url:
          'https://oaidalleapiprodscus.blob.core.windows.net/private/org-Fb4GKMjZ3sTcpzymhOMQdMNo/user-ge3m8nCriN0puU81b7GheZ0q/img-9nXsTM85cIBc9FjjQBNKLS4Q.png?st=2023-02-04T09%3A12%3A13Z&se=2023-02-04T11%3A12%3A13Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-02-03T21%3A11%3A50Z&ske=2023-02-04T21%3A11%3A50Z&sks=b&skv=2021-08-06&sig=N7t8Ih%2Bhq8%2BnREUQOKpfmjt9H6bwlc03LA3JpjoPo9c%3D',
        user_id: 1,
        file: 'bhutt34',
        file_type: 'png',
      },
    ])
  }
}
