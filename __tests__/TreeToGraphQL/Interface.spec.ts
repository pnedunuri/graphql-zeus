import { ParserTree, ScalarTypes, TypeDefinition, TypeSystemDefinition } from '../../src/Models';
import { TreeToGraphQL } from '../../src/TreeToGraphQL';

describe('Interfaces works as expected in TreeGraphQL', () => {
  it('Implements HasName Person type', () => {
    const treeMock: ParserTree = {
      nodes: [
        {
          name: 'Person',
          type: {
            name: 'type'
          },
          data: {
            type: TypeDefinition.ObjectTypeDefinition
          },
          description: '',
          interfaces: ['HasName', 'HasAge'],
          directives: [],
          args: [
            {
              name: 'name',
              args: [],
              type: {
                name: ScalarTypes.String
              },
              directives: [],
              data: {
                type: TypeSystemDefinition.FieldDefinition
              }
            }
          ]
        },
        {
          name: 'HasName',
          type: {
            name: 'interface'
          },
          data: {
            type: TypeDefinition.InterfaceTypeDefinition
          },
          description: '',
          directives: [],
          args: [
            {
              name: 'name',
              args: [],
              type: {
                name: ScalarTypes.String
              },
              directives: [],
              data: {
                type: TypeSystemDefinition.FieldDefinition
              }
            }
          ]
        },
        {
          name: 'HasAge',
          type: {
            name: 'interface'
          },
          data: {
            type: TypeDefinition.InterfaceTypeDefinition
          },
          description: '',
          directives: [],
          args: [
            {
              name: 'age',
              args: [],
              type: {
                name: ScalarTypes.Int
              },
              directives: [],
              data: {
                type: TypeSystemDefinition.FieldDefinition
              }
            }
          ]
        }
      ]
    };
    const graphql = TreeToGraphQL.parse(treeMock);
    expect(graphql).toContain(`type Person implements HasName & HasAge`);
  });
});
